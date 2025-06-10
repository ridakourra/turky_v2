<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RapportStock extends Model
{
    protected $table = 'rapports_stocks';

    protected $fillable = [
        'stock_id',
        'produit_id',
        'type_stock',
        'quantite',
        'prix_unitaire',
        'date_operation',
        'remarques'
    ];

    public function stock(): BelongsTo
    {
        return $this->belongsTo(Stock::class);
    }

    public function produit(): BelongsTo
    {
        return $this->belongsTo(Produit::class);
    }
}
