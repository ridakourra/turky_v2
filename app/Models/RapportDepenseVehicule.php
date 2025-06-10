<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RapportDepenseVehicule extends Model
{
    protected $table = 'rapports_depense_vehicules';

    protected $fillable = [
        'vehicule_id',
        'type_depense',
        'montant',
        'date_operation',
        'remarques'
    ];

    public function vehicule(): BelongsTo
    {
        return $this->belongsTo(Vehicule::class);
    }
}
