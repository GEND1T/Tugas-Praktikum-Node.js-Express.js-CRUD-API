# Node.js & Express.js CRUD REST API

Repository ini berisi source code untuk **Tugas Praktikum Node.js & Express.js**. Aplikasi ini adalah REST API sederhana untuk mengelola data **Categories** (Kategori) dan **Products** (Produk) menggunakan database MySQL.

## 📋 Fitur
- **CRUD Categories:** Membuat, membaca, mengupdate, dan menghapus kategori.
- **CRUD Products:** Membuat, membaca, mengupdate, dan menghapus produk.
- **Relasi Database:** Produk terhubung dengan Kategori melalui `category_id`.
- **Auto Timestamp:** Kolom `created_at` dan `updated_at` terisi otomatis.

## 🛠️ Teknologi yang Digunakan
- [Node.js](https://nodejs.org/) - Runtime environment
- [Express.js](https://expressjs.com/) - Web framework
- [MySQL2](https://www.npmjs.com/package/mysql2) - Database driver
- [Dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management
- [Nodemon](https://nodemon.io/) - Development utility

## 🚀 Cara Menjalankan Project
- Categories
- GET /categories - List all categories
- POST /categories - Create category (Body: {"name": "Electronics"})
- GET /categories/:id - Detail category
- PUT /categories/:id - Update category
- DELETE /categories/:id - Delete category

- Products
- GET /products - List all products
- POST /products - Create product (Body: {"category_id": 1, "name": "Laptop", "price": 5000000})
- GET /products/:id - Detail product
- PUT /products/:id - Update product
- DELETE /products/:id - Delete product
