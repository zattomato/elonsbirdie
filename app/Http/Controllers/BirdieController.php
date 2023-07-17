<?php

namespace App\Http\Controllers;

use App\Models\Birdie;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;
use Inertia\Response;

class BirdieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():Response
    {
        return Inertia::render('Birdie/Discovery', [
            'birdies' => Birdie::with('user:id,username')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',

        ]);

        $request->user()->birdies()->create($validated);

        return redirect(route('dashboard'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Birdie $birdie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Birdie $birdie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Birdie $birdie):RedirectResponse
    {
        $this->authorize('update', $birdie);

        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $birdie->update($validated);

        return redirect(route('birdie.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Birdie $birdie)
    {
        $this->authorize('delete', $birdie);

        $birdie->delete();

        return redirect(route('birdie.index'));
    }
}
