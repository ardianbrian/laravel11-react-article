<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $user = User::firstOrCreate([
            'name' => 'User Article',
            'email' => 'userarticle@example.com',
            'password' => Hash::make('userarticle')
        ]);
        $user->assignRole('user');

        Article::updateOrCreate([
            'user_id' => $user->id,
            'title' => 'Sample Article',
            'content' => 'This is a sample content :)'
        ]);
    }
}
