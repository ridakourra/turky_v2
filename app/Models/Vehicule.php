<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicule extends Model
{
    protected $fillable = [
        'nom',
        'matricule',
        'marque',
        'modele',
        'type',
        'capacite',
        'annee',
        'kilometrage',
        'carburant_type',
        'numero_chassis',
        'numero_moteur',
        'date_assurance',
        'statut',
        'livreur_id'
    ];

    public function livreur(): BelongsTo
    {
        return $this->belongsTo(Employer::class, 'livreur_id');
    }

    public function commandesFournisseurs(): HasMany
    {
        return $this->hasMany(CommandeFournisseur::class);
    }

    public function livraisons(): HasMany
    {
        return $this->hasMany(Livraison::class);
    }

    public function rapportsDepenseVehicules(): HasMany
    {
        return $this->hasMany(RapportDepenseVehicule::class);
    }
}