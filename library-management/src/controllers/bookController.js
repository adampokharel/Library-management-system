const Book = require('../models/book');

exports.createBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const book = await Book.create({ title, author, publishedYear });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishedYear } = req.body;
    const book = await Book.findByPk(id);
    if (book) {
      book.title = title;
      book.author = author;
      book.publishedYear = publishedYear;
      await book.save();
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
