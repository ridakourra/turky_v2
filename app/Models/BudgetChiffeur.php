<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BudgetChiffeur extends Model
{
    use HasFactory;
    protected $table = 'budgets_chiffeurs';

    protected $fillable = [
        'employer_id',
        'montant',
        'date',
        'note'
    ];

    public function employer(): BelongsTo
    {
        return $this->belongsTo(Employer::class);
    }
}