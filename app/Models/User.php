<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    protected $fillable = [
        'nom',
        'cin',
        'telephone',
        'adresse',
        'dettes'
    ];

    public function employers(): HasMany
    {
        return $this->hasMany(Employer::class);
    }

    public function commandes(): HasMany
    {
        return $this->hasMany(Commande::class, 'client_id');
    }

    public function rapportsDettes(): HasMany
    {
        return $this->hasMany(RapportDette::class);
    }

    public function rapportsLocationEnginsLourds(): HasMany
    {
        return $this->hasMany(RapportLocationEnginLourd::class, 'client_id');
    }
}
