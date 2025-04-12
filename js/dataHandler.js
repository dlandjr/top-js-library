import BookCardModule from './bookCardModule.js';
import Library from './library.js';
const library = new Library();

// add book to the library
const addBookToLibrary = function (book) {
    library.addBookList(
        book.title,
        book.author,
        book.year,
        book.pages,
        book.description,
        book.cover,
    );
};

// create cards for the library books
const createBookCards = function () {
    const books = library.getBookList();
    books.forEach((book) => {
        const bookData = {
            id: book.id,
            title: book.title,
            author: book.author,
            year: book.year,
            pages: book.pages,
            description: book.description,
            cover: book.cover
        };
        const bookCard = new BookCardModule(bookData);
        bookCard.renderCard();
    });
};

// add a new book to the library
export const addNewBook = function (book) {
    library.addBookList(
        book.title,
        book.author,
        book.year,
        book.pages,
        book.description,
        book.cover
    );
    const newBook = library.getNewBook();
    const newBookCard = new BookCardModule(newBook);
    newBookCard.renderCard();
};

// capture book with matching id
export const getBook = function(bookId) {
    return library.getBook(bookId);
};

// iterate through the json data and add each book to the library
// and create cards after adding all books
export const jsonHandler = function (data) {
    data.forEach((books) => {
        addBookToLibrary(books);
    });
    createBookCards();
};

fetch('./data/userBooks.json')
    .then((response) => response.json())
    .then((json) => jsonHandler(json))
    .catch((error) => console.error('Error loading JSON', error));