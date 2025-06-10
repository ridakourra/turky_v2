<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CommandeFournisseur extends Model
{
    protected $table = 'commandes_fournisseurs';

    protected $fillable = [
        'fournisseur_id',
        'livreur_id',
        'vehicule_id',
        'date'
    ];

    public function fournisseur(): BelongsTo
    {
        return $this->belongsTo(Fournisseur::class);
    }

    public function livreur(): BelongsTo
    {
        return $this->belongsTo(Employer::class, 'livreur_id');
    }

    public function vehicule(): BelongsTo
    {
        return $this->belongsTo(Vehicule::class);
    }

    public function lines(): HasMany
    {
        return $this->hasMany(LineCommandeFournisseur::class, 'commande_fournisseur_id');
    }
}