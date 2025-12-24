import db from "../config/db.js";	


// 1. menampilkan semua data product dari tabel
// sql ? select * from products
export const getProduct = (req, res) => {
    db.query("SELECT * FROM Products ", (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal mengambil data produk", error: err });

        res.json(results);
    });
};


// 2. menyimpan data produk
// sql ? insert into products (category_id, name, price) values (?, ?, ?)
export const insertProduct = (req, res) => {
    const { category_id, name, price } = req.body;
    db.query("insert into products (category_id, name, price) values (?, ?, ?)", 
        [category_id, name, price], 
        (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal menyimpan data produk", error: err });
        //jika berhasil
        res.status(201).json({ message: "Data produk berhasil disimpan", id: results.insertId });
    }); 
}


// 3. menampilkan data produk berdasarkan id
// sql ? select * from products where id = ?
export const getProductById = (req, res) => {
    const { id } = req.params;

    db .query("select * from products where id = ?", [id], (err, results) => { 
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal mengambil data produk", error: err });
        //jika data tidak ditemukan
        if (results.length === 0) {
            return res.status(404).json({ message: "Data produk tidak ditemukan" });
        }
        //jika berhasil
        res.json(results[0]);
    });
};

// 4. mengupdate data produk berdasarkan id
// sql ? update products set category_id = ?, name = ?, price = ? where id = ?
export const updateProductById = (req, res) => {
    const { id } = req.params;
    const { category_id, name, price } = req.body;

    db.query("update products set category_id = ?, name = ?, price = ? where id = ?", 
        [category_id, name, price, id], 
        (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal mengupdate data produk", error: err });
        //jika data tidak ditemukan
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Data produk tidak ditemukan" });
        }
        //jika berhasil
        res.json({ message: "Data produk berhasil diupdate" });
    });
};


// 5. menghapus data produk berdasarkan id
// sql ? delete from products where id = ?
export const deleteProductById = (req, res) => {
    const { id } = req.params;

    db.query("delete from products where id = ?", [id], (err, results) => {
        //jika ada eror
        if (err) res.status(500).json({ message: "Gagal menghapus data produk", error: err });
        //jika data tidak ditemukan
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Data produk tidak ditemukan" });
        }
        //jika berhasil
        res.json({ message: "Data produk berhasil dihapus" });
    });
};
