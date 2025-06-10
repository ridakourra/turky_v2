<?php

namespace App\Http\Controllers;

use App\Models\Employer;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployerController extends Controller
{
    // 1. Index avec filtres + tri + pagination
    public function index(Request $request)
    {
        $query = Employer::with('user');

        // Filtre search CIN via employer.cin or user.nom
        if ($search = $request->input('search')) {
            $query->where('cin', 'like', "%{$search}%")
                  ->orWhereHas('user', fn($q)=> $q->where('nom', 'like', "%{$search}%"));
        }

        // Filtre par fonction
        if ($fonction = $request->input('fonction')) {
            $query->where('fonction', $fonction);
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
            ->appends($request->only(['search','fonction','sort','direction']));

        return Inertia::render('Employers/Index', [
            'employers' => $employers,
            'filters'   => [
                'search'    => $search,
                'fonction'  => $fonction,
                'sort'      => $sort,
                'direction' => $direction,
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
        $data = $request->validate([
            'cin'          => 'required|string|unique:employers,cin',
            'password'     => 'required|string|min:6',
            'actif'        => 'required|boolean',
            'date_embauche'=> 'required|date',
            'fonction'     => 'required|in:directeur,comptable,livreur',
            'user_id'      => 'required|exists:users,id',
        ]);

        Employer::create([
            ...$data,
            'password' => bcrypt($data['password']),
        ]);

        return redirect()
            ->route('employers.index')
            ->with('success', 'Employé créé avec succès.');
    }

    // 4. Afficher un employé
    public function show(Employer $employer)
    {
        $employer->load('user');
        return Inertia::render('Employers/Show', [
            'employer' => $employer,
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
            'fonction'     => 'required|in:directeur,comptable,livreur',
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