-- ddl
-- create database
CREATE DATABASE buku;

-- create sequence for auto increment
CREATE SEQUENCE books_id_seq;

-- create table
CREATE TABLE books(
    id INT NOT NULL DEFAULT NEXTVAL('books_seq_id') PRIMARY KEY,
    isbn VARCHAR NOT NULL,
    judul VARCHAR NOT NULL,
    sinopsis VARCHAR NOT NULL,
    penulis VARCHAR NOT NULL,
    genre VARCHAR NOT NULL
);

-- alter and give sequence to books table
ALTER SEQUENCE books_id_seq OWNED BY books.id;

-- CRUD
-- insert data to books table
INSERT INTO books(isbn, judul, sinopsis, penulis, genre)
VALUES('ISBN 123-1234-12-1', 'Agama Dalam Hati', 'Isi Agama dan Hati', 'Saya dong', 'Religion');
INSERT INTO books(isbn, judul, sinopsis, penulis, genre)
VALUES('ISBN 124-1224-13-1', 'Cinta dalam diam', 'Cinta dalam diam', 'Ust. Saya', 'Romance');

-- get all data
SELECT * FROM books;
-- or get one by one (indexed) more faster than select *
SELECT id, isbn, judul, sinopsis, penulis, genre FROM books;

-- update
UPDATE books
SET penulis = 'Ust. FH'
WHERE id = 1;

-- Delete
DELETE FROM books WHERE id = 1;