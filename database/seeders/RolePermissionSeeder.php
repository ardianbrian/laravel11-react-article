<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::truncate();
        Role::truncate();

        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);

        $permissions = [
            'manage users',
            'manage roles',
            'manage permissions',
            'manage articles',      // Untuk admin mengelola semua artikel
            'create article',       // Untuk user membuat artikel
            'edit own article',     // Untuk user mengedit artikelnya sendiri
            'delete own article',   // Untuk user menghapus artikelnya sendiri
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $adminRole->givePermissionTo(Permission::all());

        $userRole->givePermissionTo([
            'create article',
            'edit own article',
            'delete own article',
        ]);
    }
}
