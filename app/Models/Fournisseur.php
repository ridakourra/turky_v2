<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Fournisseur extends Model
{
    protected $fillable = [
        'nom',
        'ice_ou_cin',
        'adresse',
        'note'
    ];

    public function commandesFournisseurs(): HasMany
    {
        return $this->hasMany(CommandeFournisseur::class);
    }

    public function stocks(): HasMany
    {
        return $this->hasMany(Stock::class);
    }
}