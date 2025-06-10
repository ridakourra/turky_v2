<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = [
        'produit_id',
        'type',
        'prix_unitaire',
        'fournisseur_id',
        'quantite',
    ];

    public function produit(): BelongsTo
    {
        return $this->belongsTo(Produit::class);
    }

    public function fournisseur(): BelongsTo
    {
        return $this->belongsTo(Fournisseur::class);
    }

    public function linesCommandes(): HasMany
    {
        return $this->hasMany(LineCommande::class);
    }

    public function rapportsStocks(): HasMany
    {
        return $this->hasMany(RapportStock::class);
    }
}