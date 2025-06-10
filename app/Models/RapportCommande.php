<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RapportCommande extends Model
{
    protected $table = 'rapports_commandes';

    protected $fillable = [
        'commande_id',
        'type',
        'montant_totale',
        'status',
        'date_operation',
        'remarques'
    ];

    public function commande(): BelongsTo
    {
        return $this->belongsTo(Commande::class);
    }
}
