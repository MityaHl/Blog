<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function showComments ($id)
    {
        $comments = Post::find($id)->comment;
        return response()->json($comments);
    }
}
