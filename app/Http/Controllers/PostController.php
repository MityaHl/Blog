<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::with('categories', 'users')->get();
        return response()->json($posts);
    }

    public function store(Request $request) {
        Post::add($request->all());
        return response()->json('create post');
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
