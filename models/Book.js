const mongoose = require("../db/connections");

// make a new book

const BookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  author: String,
  genre: { type: String, require: true },
  img: String,
  filmAdaptation: Boolean,
  description: String,
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;


