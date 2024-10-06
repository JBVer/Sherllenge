<h1 align="center">
	🚀 Laravel Challenge
</h1>

<p align="center">
	<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/JBVer/Sherllenge?color=lightblue" />
	<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JBVer/Sherllenge?color=blue" />
	<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JBVer/Sherllenge?color=green" />
</p>

## 💡 About the project
* Basic Laravel application that includes user authentication and CRUD functionality.

## Project Stack
* PHP
* Laravel
* Laravel Breeze
* Inertia.js
* React
* Vite

## Usage

```shell
# Within the server repo, install Laravel dependencies:
composer install

# Install the node dependencies:
npm install

# Create .env from .env.example
cp .env.example .env

# Create your database.sqlite and run the migrations
php artisan migrate

# Generate the application key
php artisan key:generate

# Complete the .env file
DB_DATABASE=/absolute/path/to/database/database.sqlite
DB_USERNAME=username
DB_PASSWORD=strongpassword

# Build the front-end assets
npm run build

# Start the development server
php artisan serve
```

* Access to the app through: localhost:8000
