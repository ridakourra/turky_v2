<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Employer extends Authenticatable
{
    protected $fillable = [
        'cin',
        'password',
        'actif',
        'date_embauche',
        'fonction',
        'user_id'
    ];

    protected $hidden = [
        'password',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function salaires(): HasMany
    {
        return $this->hasMany(Salaire::class);
    }

    public function absences(): HasMany
    {
        return $this->hasMany(Absence::class);
    }

    public function budgetsChiffeurs(): HasMany
    {
        return $this->hasMany(BudgetChiffeur::class);
    }

    public function commandesFournisseurLivrees(): HasMany
    {
        return $this->hasMany(CommandeFournisseur::class, 'livreur_id');
    }

    public function livraisons(): HasMany
    {
        return $this->hasMany(Livraison::class, 'livreur_id');
    }

    public function rapportsSalaires(): HasMany
    {
        return $this->hasMany(RapportSalaire::class);
    }
}
