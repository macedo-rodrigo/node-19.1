const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creando el schema de libros
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: false,
    },
    pages: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book };
