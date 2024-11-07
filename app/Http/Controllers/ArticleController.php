<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ArticleController extends Controller
{

    public function index()
    {
        $articles = Article::with('user')->get();

        return Inertia::render('Articles/Articles', [
            'articles' => $articles
        ]);

    }

    public function create()
    {
        return Inertia::render('Articles/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $validated['user_id'] = Auth::id();

        Article::create($validated);

        return redirect()->route('articles');
    }

    public function edit(Article $article)
    {
        $this->authorize('update', $article);

        return Inertia::render('Articles/Edit', [
            'article' => $article
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $this->authorize('update', $article);

        $validated = $request->validate([
            'title' => 'required|string|max:25',
            'content' => 'required|string'
        ]);

        $article->update($validated);

        return redirect()->route('articles');
    }

    public function destroy(Article $article)
    {
        $this->authorize('delete', $article);

        $article->delete();

        return redirect()->route('articles');
    }
}
