<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use OwenIt\Auditing\Models\Audit;

class AuditController extends Controller
{
    public function index()
    {
        $articleAudits = Audit::where('auditable_type', Article::class)->get();

        return Inertia::render('Audits/Audits', [
            'audits' => $articleAudits
        ]);
    }
}
