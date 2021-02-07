const express = require("express");
const app = express.Router();
let books = require("../data/books.json"); //berpusat di data json

// get
app.get("/books", (req, res) => {
  res.status(200).json(books);
});
// get one or find one
app.get("/books/:id", (req, res) => {
  const post = books.find((i) => i.id === +req.params.id);
  res.status(200).json(post);
});

// post
app.post(`/books`, (req, res) => {
  const { isbn, judul, sinopsis, penulis, genre } = req.body;

  const id = books[books.length - 1].id + 1;
  const post = {
    id,
    isbn,
    judul,
    sinopsis,
    penulis,
    genre,
  };

  books.push(post);
  res.status(201).json({
    message: `data dengan id ${id} berhasil ditambah`,
    data: books,
  });
});

// update
app.put(`/books/:id`, (req, res) => {
  const id = req.params.id;
  books.filter((post) => {
    if (post.id == id) {
      post.isbn = req.body.isbn;
      post.judul = req.body.judul;
      post.sinopsis = req.body.sinopsis;
      post.penulis = req.body.penulis;
      post.genre = req.body.genre;
      return post;
    }
  });
  res.json({
    message: `Data dengan id ${id} telah sukses diupdate`,
    data: books,
  });
});

// delete
app.delete(`/books/:id`, (req, res) => {
  books = books.filter((i) => i.id !== +req.params.id);
  res.status(200).json({
    message: `Post dengan id ${req.params.id} telah berhasil dihapus`,
    data: books,
  });
});

module.exports = app;
