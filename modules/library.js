// modules/library.js

import createBook from './book.js';

// Library module
const createLibrary = () => {
  const books = [];

  const addBook = (title, author) => {
    const book = createBook(title, author);
    books.push(book);
  };

  const removeBook = (index) => {
    books.splice(index, 1);
  };

  const getAllBooks = () => books;

  return { addBook, removeBook, getAllBooks };
};

export default createLibrary;
