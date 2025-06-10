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
        Schema::create('rapports_salaires', function (Blueprint $table) {
            $table->id();
            $table->foreignId('salaire_id')->constrained('salaires')->onDelete('cascade');
            $table->foreignId('employer_id')->constrained('employers')->onDelete('cascade');
            $table->decimal('montant', 15, 2);
            $table->dateTime('date_operation');
            $table->text('remarques')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rapports_salaires');
    }
};