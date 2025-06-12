<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Salaire extends Model
{
    protected $fillable = [
        'employer_id',
        'type',
        'prix',
        'produit_id'
    ];

    public function employer(): BelongsTo
    {
        return $this->belongsTo(Employer::class);
    }

    public function produit(): BelongsTo
    {
        return $this->belongsTo(Produit::class, 'produit_id');
    }

    public function rapportsSalaires(): HasMany
    {
        return $this->hasMany(RapportSalaire::class);
    }
}