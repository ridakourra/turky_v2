<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lines_commandes_fournisseurs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('commande_fournisseur_id')->constrained('commandes_fournisseurs')->onDelete('cascade');
            $table->string('nom_produit');
            $table->integer('quantite');
            $table->decimal('prix_unitaire', 15, 2);
            $table->decimal('totale_montant', 15, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lines_commandes_fournisseurs');
    }
};
