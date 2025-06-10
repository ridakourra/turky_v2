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
        Schema::create('engins_lourds', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('reference');
            $table->string('type');
            $table->string('marque');
            $table->string('modele');
            $table->integer('capacite');
            $table->year('annee');
            $table->string('numero_serie');
            $table->string('numero_moteur');
            $table->decimal('location_par_heure', 8, 2);
            $table->string('carburant_type');
            $table->date('date_assurance');
            $table->string('statut');
            $table->foreignId('livreur_id')->constrained('employers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('engins_lourds');
    }
};
