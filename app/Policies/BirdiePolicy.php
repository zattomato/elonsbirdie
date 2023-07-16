<?php

namespace App\Policies;

use App\Models\Birdie;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BirdiePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Birdie $birdie): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Birdie $birdie): bool
    {
        return $birdie->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Birdie $birdie): bool
    {
        return $this->update($user, $birdie);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Birdie $birdie): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Birdie $birdie): bool
    {
        //
    }
}
