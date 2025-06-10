<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entreprise extends Model
{
    protected $fillable = [
        'nom',
        'responsable',
        'email',
        'telephone',
        'adresse',
        'ice',
        'rc',
        'patente'
    ];
}
