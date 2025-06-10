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
        Schema::create('rapports_dettes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('dette_id')->nullable();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->decimal('montant', 15, 2);
            $table->string('status');
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
        Schema::dropIfExists('rapports_dettes');
    }
};
