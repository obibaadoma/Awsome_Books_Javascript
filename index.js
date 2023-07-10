// index.js
import { DateTime } from 'luxon';
import createLibrary from './modules/library.js';

const library = createLibrary();

library.addBook('The Hobbit', 'J.R.R. Tolkien');
library.addBook('To Kill a Mockingbird', 'Harper Lee');
library.addBook('1984', 'George Orwell');

console.log(library.getAllBooks());
