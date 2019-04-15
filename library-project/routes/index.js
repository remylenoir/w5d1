const express = require("express");
const router = express.Router();
const Book = require("../models/book");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/books", (req, res) => {
  // get all the books
  Book.find({})
    .then(books => {
      res.render("books", { books });
    })
    .catch(err => {
      console.error(err);
    });
  //
});

router.get("/books/:bookId", (req, res) => {
  const _id = req.params.bookId;
  Book.findOne({ _id })
    .then(book => {
      res.render("book-detail", { book });
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
