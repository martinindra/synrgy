const express = require("express");
const { books } = require("./models");
const PORT = 3030;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(`/books`, async (req, res) => {
  try {
    await books
      .findAll()
      .then((result) => {
        res.status(200).json({
          message: `Data Ditemukan`,
          data: result,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: `Tidak dapat menjangkau data`,
        });
        console.error(err);
      });
  } catch (error) {
    res.status(404).json({
      message: `Tidak ada data, dan data tidak ditemukan`,
      error: error,
    });
  }
});

app.get(`/books/:id`, async (req, res) => {
  let id = req.params.id;
  try {
    await books
      .findOne({
        where: {
          id: id,
        },
      })
      .then((result) => {
        res.status(200).json({
          message: `Data dengan id ${id} Ditemukan`,
          data: result,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: `Tidak ada data, dan data tidak ditemukan`,
        });
        console.error(err);
      });
  } catch (error) {
    res.status(404).json({
      message: `Tidak ada data, dan data tidak ditemukan`,
      error: error,
    });
  }
});

app.post(`/books`, async (req, res) => {
  console.log(req.body);
  let { isbn, judul, sinopsis, penulis, genre } = req.body;
  try {
    let data = await books.create({
      isbn: isbn,
      judul: judul,
      sinopsis: sinopsis,
      penulis: penulis,
      genre: genre,
    });
    res.status(201).json({
      message: `data berhasil ditambahkan`,
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: `Data tidak dapat ditambahkan`,
      error: error,
    });
  }
});

app.put(`/books/:id`, async (req, res) => {
  let id = req.params.id;
  let { isbn, judul, sinopsis, penulis, genre } = req.body;
  try {
    let data = await books.update(
      {
        isbn: isbn,
        judul: judul,
        sinopsis: sinopsis,
        penulis: penulis,
        genre: genre,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(201).json({
      message: `data berhasil di Update`,
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: `Data tidak dapat di update`,
      error: error,
    });
  }
});

app.delete(`/books/:id`, async (req, res) => {
  let id = req.params.id;
  try {
    await books.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: `data berhasil di hapus dengan id ${id}`,
    });
  } catch (error) {
    res.status(404).json({
      message: `data Gagal di hapus dengan id ${id}`,
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server Berjalan di PORT ${PORT}`);
});
