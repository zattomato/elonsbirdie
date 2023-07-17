<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BirdieController;
use App\Models\Birdie;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function ():Response {
    return Inertia::render('Dashboard', [
        $currentUser = Auth::id(),

        'birdies' => Birdie::with('user:id,username')
            ->where('user_id',$currentUser)
            ->latest()
            ->take(10)
            ->get(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('requirements', function () {
    return Inertia::render('Requirements');
})->middleware(['auth', 'verified'])->name('requirements');


Route::resource('birdie',BirdieController::class)
    ->only(['index','store','update','destroy'])
    ->middleware(['auth','verified']);




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
