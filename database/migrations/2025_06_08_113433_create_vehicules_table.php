<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiculesTable extends Migration
{
    public function up()
    {
        Schema::create('vehicules', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('matricule')->unique();
            $table->string('marque');
            $table->string('modele');
            $table->string('type');
            $table->integer('capacite');
            $table->year('annee');
            $table->integer('kilometrage');
            $table->string('carburant_type');
            $table->string('numero_chassis');
            $table->string('numero_moteur');
            $table->date('date_assurance');
            $table->string('statut');
            $table->foreignId('livreur_id')->constrained('employers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('vehicules');
    }
}
