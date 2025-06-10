<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RapportSalaire extends Model
{
    protected $table = 'rapports_salaires';

    protected $fillable = [
        'salaire_id',
        'employer_id',
        'montant',
        'date_operation',
        'remarques'
    ];

    public function salaire(): BelongsTo
    {
        return $this->belongsTo(Salaire::class);
    }

    public function employer(): BelongsTo
    {
        return $this->belongsTo(Employer::class);
    }
}
