<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Livraison extends Model
{
    protected $fillable = [
        'commande_id',
        'vehicule_id',
        'livreur_id',
        'adresse',
        'date',
        'status'
    ];

    public function commande(): BelongsTo
    {
        return $this->belongsTo(Commande::class);
    }

    public function vehicule(): BelongsTo
    {
        return $this->belongsTo(Vehicule::class);
    }

    public function livreur(): BelongsTo
    {
        return $this->belongsTo(Employer::class, 'livreur_id');
    }
}
