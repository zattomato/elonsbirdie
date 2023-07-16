<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Birdie extends Model
{
    use HasFactory;

    public $fillable = [
        'message',
        'like_count',
    ];

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
