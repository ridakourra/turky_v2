<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Produit extends Model
{
    protected $fillable = [
        'nom',
        'photo',
        'unite',
        'prix_achat'
    ];

    public function stocks(): HasMany
    {
        return $this->hasMany(Stock::class);
    }

    public function salaires(): HasMany
    {
        return $this->hasMany(Salaire::class, 'product_id');
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