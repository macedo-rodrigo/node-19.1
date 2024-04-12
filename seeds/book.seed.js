const mongoose = require("mongoose");
const { connect } = require("../db.js"); // BBDD
const { Book } = require("../models/Book.js"); // Model

const bookList = [
  {
    title: "El nombre del viento",
    author: "Patrick Rothfuss",
    genre: "Fantasía",
    year: 2007,
    pages: 662,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Ciencia ficción",
    year: 1949,
    pages: 328,
  },
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    genre: "Realismo mágico",
    year: 1967,
    pages: 417,
  },
  {
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    genre: "Fantasía",
    year: 1997,
    pages: 332,
  },
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    genre: "Novela",
    year: 1605,
    pages: 863,
  },
];

connect().then(() => {
  console.log("Tenemos conexión");

  // Borrar datos
  Book.collection.drop().then(() => {
    console.log("Usuarios eliminados");

    // Añadimos los libros
    const documents = bookList.map((book) => new Book(book));
    Book.insertMany(documents)
      .then(() => console.log("Datos guardados correctamente!"))
      .catch((error) => console.error(error))
      .finally(() => mongoose.disconnect());
  });
});
