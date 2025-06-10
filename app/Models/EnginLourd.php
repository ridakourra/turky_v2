<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EnginLourd extends Model
{
    protected $table = 'engins_lourds';

    protected $fillable = [
        'nom',
        'reference',
        'type',
        'marque',
        'modele',
        'capacite',
        'annee',
        'numero_serie',
        'numero_moteur',
        'location_par_heure',
        'carburant_type',
        'date_assurance',
        'statut',
        'livreur_id'
    ];

    public function livreur(): BelongsTo
    {
        return $this->belongsTo(Employer::class, 'livreur_id');
    }

    public function rapportsLocationEnginsLourds(): HasMany
    {
        return $this->hasMany(RapportLocationEnginLourd::class, 'engin_lourd_id');
    }
}
