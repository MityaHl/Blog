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

    public function show($id) {
        $post = Post::with('comments')->find($id);
        return response()->json($post);
    }

    public function showComments ($id)
    {
        $comments = Post::with('comments')->find($id);
        return response()->json($comments);
    }
}
