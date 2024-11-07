<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::truncate();

        $adminRole = Role::where('name', 'admin')->first();
        $userRole = Role::where('name', 'user')->first();

        if (!$adminRole || !$userRole) {
            $this->command->error("Roles not found. Run RolePermissionSeeder first");
        }

        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin1234'),
        ]);
        $admin->assignRole($adminRole);

        $user = User::create([
            'name' => 'User1',
            'email' => 'user1@example.com',
            'password' => Hash::make('user1234'),
        ]);
        $user->assignRole($userRole);

        $this->command->info("User1 and Admin is created with role");
    }
}
