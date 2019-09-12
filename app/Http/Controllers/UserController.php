<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function isAuth() {
        if (Auth::check())
        {
            return response()->json(true);
        }
        return response()->json(false);
    }

    public function show($id) {
        $user = User::find($id);
        return response()->json($user);
    }
}
