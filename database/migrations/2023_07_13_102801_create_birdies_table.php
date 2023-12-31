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
        Schema::create('birdies', function (Blueprint $table) {
            $table->id();
            $table->string('message');
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            //$table->foreignId('username')->constrained()->cascadeOnDelete();
            $table->integer('like_count')->default(0);
            //$table->string('picture')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('birdies');
    }
};
