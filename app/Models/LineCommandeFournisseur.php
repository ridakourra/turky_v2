<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LineCommandeFournisseur extends Model
{
    protected $table = 'lines_commandes_fournisseurs';

    protected $fillable = [
        'commande_fournisseur_id',
        'nom_produit',
        'quantite',
        'prix_unitaire',
        'totale_montant'
    ];

    public function commandeFournisseur(): BelongsTo
    {
        return $this->belongsTo(CommandeFournisseur::class);
    }
}
