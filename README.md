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
* PHP 8.3.12
* Laravel Framework 11.26.0
* Mysql 8.0.39
* Breeze
* Inertia.js
* React
* Vite

## Usage

```shell
# Within the server repo, install Laravel dependencies:
composer install

# Install the node dependencies:
npm install

# Create a mysql database if does not exist yet
sudo systemctl start mysqld
mysql -u username -p
CREATE DATABASE DBname;
EXIT;

# Create and edit the .env file
cp .env.example .env
vim .env
DB_DATABASE=DBname
DB_USERNAME=username
DB_PASSWORD=yourpassword

# Generate the database Tables
php artisan migrate

# Generate the application enc. key
php artisan key:generate

# Build the front-end assets
npm run build

# Start the development server
php artisan serve
```

* Access the app through: localhost:8000
