import db from "../config/db.js";	



// menampilkan semua data kategori dari tabel
// sql ? select * from categories
export const getCategories = (req, res) => {
    db.query("SELECT * FROM Categories ", (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal mengambil data kategori", error: err });
        res.json(results);
    });
};

// 2. menyimpan data katagori
// sql ? insert into categories (id, name) values (?, ?)
export const insertCategory = (req, res) => {
    const { name, description } = req.body;
    db.query("insert into categories (id, name) values (?, ?)",
        [name, description],
        (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal menyimpan data kategori", error: err });
        //jika berhasil
        res.status(201).json({ message: "Data kategori berhasil disimpan", id: results.insertId });
    });
};



// 3. menampilkan data kategori berdasarkan id
// sql ? select * from categories where id = ?
export const getCategoryById = (req, res) => {
    const { id } = req.params;
    db .query("select * from categories where id = ?", [id], (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal mengambil data kategori", error: err });
        //jika data tidak ditemukan
        if (results.length === 0) {
            return res.status(404).json({ message: "Data kategori tidak ditemukan" });
        }
        //jika berhasil
        res.json(results[0]);
    });
};


// 4. mengupdate data kategori berdasarkan id
// sql ? update categories set name = ? where id = ?
export const updateCategoryById = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    db.query("update categories set name = ? where id = ?",
        [name, id],
        (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal mengupdate data kategori", error: err });
        //jika data tidak ditemukan
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Data kategori tidak ditemukan" });
        }
        //jika berhasil
        res.json({ message: "Data kategori berhasil diupdate" });
    });
};


// 5. menghapus data kategori berdasarkan id
// sql ? delete from categories where id = ?
export const deleteCategoryById = (req, res) => {
    const { id } = req.params;

    db.query("delete from categories where id = ?", [id], (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal menghapus data kategori", error: err });
        //jika data tidak ditemukan
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Data kategori tidak ditemukan" });
        }
        //jika berhasil
        res.json({ message: "Data kategori berhasil dihapus" });
    });
};