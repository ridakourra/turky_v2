<?php

namespace App\Http\Controllers;

use App\Models\Employer;
use App\Models\Salaire;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class EmployerController extends Controller
{

    /**
     * ----------------- Filtering ------------------------
     * By:
     *  - CIN , Nom , Telephone, Adresse
     *  - Actif
     *  - Debut / Fin Date Embauche
     *  - Fonction
     *  - Sort Asc/Desc
     */

    public function index(Request $request)
    {
        $query = Employer::with('user');

        // Filtre search CIN , Nom , Telephone, Adresse
        if ($search = $request->input('search')) {
            $query->where('cin', 'like', "%{$search}%")
                  ->orWhereHas('user', fn($q)=> $q->where('nom', 'like', "%{$search}%"))
                  ->orWhereHas('user', fn($q) => $q->where('telephone', 'like', "%{$search}%"))
                  ->orWhereHas('user', fn($q) => $q->where('adresse', 'like', "%{$search}%"));
        }

        // Actif?
        if($actif = $request->input('actif')){
            $query->where('actif', $actif);
        }

        // Filtre par fonction
        if ($fonction = $request->input('fonction')) {
            $query->where('fonction', $fonction);
        }

        // Debut / Fin Date embauche
        if($date_debut_embauche = $request->input('date_debut_embauche')){
            $query->where('date_embauche', '>=', $date_debut_embauche);
        }
        if($date_fin_embauche = $request->input('date_fin_embauche')){
            $query->where('date_embauche', '<=', $date_fin_embauche);
        }

        // Tri
        $sort      = $request->input('sort', 'id');
        $direction = $request->input('direction', 'asc');
        if (in_array($sort, ['cin','fonction','date_embauche']) &&
            in_array($direction, ['asc','desc'])) {
            $query->orderBy($sort, $direction);
        }

        $employers = $query
            ->paginate(10)
            ->appends($request->only(['search','fonction','sort','direction', 'actif','date_debut_embauche', 'date_fin_embauche']));

        return Inertia::render('Employers/Index', [
            'employers' => $employers,
            'filters'   => [
                'search'    => $search,
                'fonction'  => $fonction,
                'sort'      => $sort,
                'direction' => $direction,
                'date_debut_embauche' => $date_debut_embauche,
                'date_fin_embauche' => $date_fin_embauche,
                'actif' => $actif
            ],
        ]);
    }

    // 2. Formulaire de création
    public function create()
    {
        return Inertia::render('Employers/Create');
    }

    // 3. Enregistrer nouvel employé
    public function store(Request $request)
    {
        $rules = [
            'nom' => ['required'],
            'cin' => ['required', 'unique:users,cin'],
            'fonction' => ['required'],
            'type' => ['required'],
            'prix' => ['required']
        ];

        if ($request->fonction === 'directeur' || $request->fonction === 'comptable') {
            $rules['password'] = ['required'];
        }

        $validate = $request->validate($rules);

        try {
            return DB::transaction(function() use ($request) {
                // add user
                $user = User::create([
                    'nom' => $request->nom,
                    'cin' => $request->cin,
                    'telephone' => $request->telephone,
                    'adresse' => $request->adresse,
                    'dettes' => 0,
                ]);

                // add employer
                $employer = Employer::create([
                    'cin' => $request->cin,
                    'password' => $request->password,
                    'actif' => $request->actif ?? true,
                    'date_embauche' => $request->date_embauche ?? now(),
                    'fonction' => $request->fonction,
                    'user_id' => $user->id
                ]);

                // add salaire
                $salaire = Salaire::create([
                    'employer_id' => $employer->id,
                    'type' => $request->type,
                    'prix' => $request->prix,
                    'produit_id' => $request->produit_id || null
                ]);

                return to_route('employers.index')
                    ->with('success', 'Employé créé avec succès.');
            });
        } catch (Exception $e) {
            return back()
                ->withInput()
                ->with(['error'=> 'Une erreur est survenue lors de la création de l\'employé.', 'err' => $e->getMessage()]);
        }
    }

    // 4. Afficher un employé
    public function show(Employer $employer)
    {
        $absences = [
            'data' => $employer->absences(),
            'countAll' => $employer->absences()->count(),
            'countThisMonth' => $employer->absences()->whereMonth('created_at', now()->month)->count(),
        ];
        return Inertia::render('Employers/Show', [
            'employer' => $employer->load(['user', 'salaires.produit', 'budgetsChiffeurs', 'commandesFournisseurLivrees', 'livraisons', 'rapportsSalaires']),
            'absences' => $absences,
        ]);
    }

    // 5. Formulaire d’édition
    public function edit(Employer $employer)
    {
        $employer->load('user');
        return Inertia::render('Employers/Edit', [
            'employer' => $employer,
        ]);
    }

    // 6. Mettre à jour
    public function update(Request $request, Employer $employer)
    {
        $data = $request->validate([
            'cin'          => 'required|string|unique:employers,cin,' . $employer->id,
            'password'     => 'nullable|string|min:6',
            'actif'        => 'required|boolean',
            'date_embauche'=> 'required|date',
            'fonction'     => 'required|in:directeur,comptable,livreur,ouvrier',
            'user_id'      => 'required|exists:users,id',
        ]);

        if (!empty($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

        $employer->update($data);

        return redirect()
            ->route('employers.index')
            ->with('success', 'Employé mis à jour avec succès.');
    }

    // 7. Supprimer
    public function destroy(Employer $employer)
    {
        $employer->delete();

        return redirect()
            ->route('employers.index')
            ->with('success', 'Employé supprimé avec succès.');
    }
}
