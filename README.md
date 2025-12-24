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
- # Categories
- GET http://localhost:3000/categories - List all categories
- POST http://localhost:3000/categories - Create category
  - (Body > RAW > JSON : {
    "id": "PM",
    "name": "PERALATAN MASAK"
}) 
- GET http://localhost:3000/categories/id - Detail category
- PUT http://localhost:3000/categories/id - Update category
  - (Body > RAW > JSON : {
    "id": "PM",
    "name": "PERALATAN MANDI"
}) 
- DELETE http://localhost:3000/categories/id - Delete category

- # Products
- GET http://localhost:3000/products - List all products
- POST http://localhost:3000/products - Create product
  -  (Body > RAW > JSON : {
    "category_id": "MK",
    "name": "AYAM OPOR",
    "price": "20000.00"
})
- GET http://localhost:3000/products/id - Detail product
- PUT http://localhost:3000/products/id - Update product
  - (Body > RAW > JSON : {
    "id": 4,
    "category_id": "MK",
    "name": "AYAM OPOR TEGAL",
    "price": "25000.00"
})
- DELETE http://localhost:3000/products/id - Delete product
