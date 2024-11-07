# Laravel 11 with Breeze, React, TypeScript, Tailwind - Audit Trail System

This project is a web application built using Laravel 11 with Breeze for authentication, React.js with TypeScript, Tailwind CSS for styling, and PostgreSQL as the database. It implements user management, role-based permissions, and audit trail functionality.

## Prerequisites

Before you begin, make sure you have the following installed on your local machine:

-   PHP >= 8.1.x
-   Composer
-   Node.js and npm
-   PostgreSQL

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ardianbrian/laravel11-react-article.git
cd project-name
```

### 2. Instal Backend Dependecies

composer install

### 3. Instal Frontend Dependecis

npm install && npm run build

### 4. Setting Database in env

### 5. Migrate and Seeding

php artisan db:seed
php artisan migrate

### 6. Run Application

php artisan serve
npm run dev
