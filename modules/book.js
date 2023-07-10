// modules/book.js

// Book module
const createBook = (title, author) => {
  let read = false;

  const getTitle = () => title;
  const getAuthor = () => author;
  const isRead = () => read;
  const toggleRead = () => {
    read = !read;
  };

  return {
    getTitle, getAuthor, isRead, toggleRead,
  };
};

export default createBook;
