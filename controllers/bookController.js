const express = require('express');
const router = express.Router();

const Book = require('../models/Book')

router.get('/', (req, res) => {
    Book.find({}).then((books) => res.json(books)
    .catch((err) => console.error(err)))
});