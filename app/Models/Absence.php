<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Absence extends Model
{
    use HasFactory;

    protected $fillable = [
        'employer_id',
        'justifie',
        'raison',
        'date'
    ];

    public function employer(): BelongsTo
    {
        return $this->belongsTo(Employer::class);
    }
}