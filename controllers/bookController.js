const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

// Get all Books

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    if (books) {
      res.json(books);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
  }
});

// Get book by genre and random

router.get("/genre/:genre/random", async (req, res) => {
  try {
    const books = await Book.find({ genre: req.params.genre });
    const randomIndex = Math.floor(Math.random() * books.length);
    console.log(req.params.genre);
    if (books) {
      res.json(books[randomIndex]);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
  }
});

// Get Book by Genre

router.get("/genre/:genre", async (req, res) => {
  try {
    const books = await Book.find({ genre: req.params.genre });
    console.log(req.params.genre);
    if (books) {
      res.json(books);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
  }
});

// Get Book by ID

router.get("/:id", async (req, res) => {
  try {
    const books = await Book.findById(req.params.id);
    if (books) {
      res.json(books);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
  }
});

// create new Book

router.post("/", (req, res) => {
  const newBook = req.body;
  Book.create(newBook).then((book) => {
    res.json(book);
  });
});

// Update Book by Id

router.put("/:id", async (req, res) => {
  try {
    const updatedBook = req.body;
    const updatedDocument = await Book.findByIdAndUpdate(
      req.params.id,
      updatedBook,
      { new: true }
    );
    res.json(updatedDocument);
  } catch (error) {
    console.log(error);
  }
});

//  Delete Book by ID

router.delete("/:id", async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deleteBook);
  } catch (error) {
    console.log.error;
  }
});

module.exports = router;
