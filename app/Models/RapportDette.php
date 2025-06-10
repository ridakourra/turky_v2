<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RapportDette extends Model
{
    protected $table = 'rapports_dettes';

    protected $fillable = [
        'dette_id',
        'user_id',
        'montant',
        'status',
        'date_operation',
        'remarques'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
