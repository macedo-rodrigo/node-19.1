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
    publisher: {
      type: {
        name: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
      },
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book };
