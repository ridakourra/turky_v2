<?php

namespace App\Http\Controllers;

use App\Models\Entreprise;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EntrepriseController extends Controller
{
    public function edit(){
        $entreprise = Entreprise::first();
        return Inertia::render('Entreprise', ['entreprise' => $entreprise]);
    }

    public function update(){
        $validated = request()->validate([
            'nom' => 'required|string|max:255',
            'responsable' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'telephone' => 'nullable|string|max:20',
            'adresse' => 'nullable|string|max:255',
            'ice' => 'nullable|string|max:255',
            'rc' => 'nullable|string|max:255',
            'patente' => 'nullable|string|max:255',
        ]);

        $entreprise = Entreprise::first();
        if($entreprise->update($validated)){
            return back()->with('success', 'Les informations de l\'entreprise ont été mises à jour.');
        }else{
            return back()->with('error', 'Une erreur est survenue lors de la mise à jour.');
        }

    }
}