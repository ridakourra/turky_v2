<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RapportLocationEnginLourd extends Model
{
    protected $table = 'rapports_location_engins_lourds';

    protected $fillable = [
        'engin_lourd_id',
        'client_id',
        'quantite',
        'prix_par_heure',
        'montant_totale',
        'date_operation',
        'remarques'
    ];

    public function enginLourd(): BelongsTo
    {
        return $this->belongsTo(EnginLourd::class, 'engin_lourd_id');
    }

    public function client(): BelongsTo
    {
        return $this->belongsTo(User::class, 'client_id');
    }
}