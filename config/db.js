import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();


// perintah untuk membuat koneksi ke database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_User,
    password: process.env.DB_PASS,
    database: process.env.DB_Database,
});

// jalankan koneksi database
db.connect((err) => {
    if (err) {
        console.error("Koneksi ke database gagal:", err);
        return;
    }
    console.log("Koneksi ke database berhasil!");
});

export default db;