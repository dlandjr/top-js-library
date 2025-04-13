import Book from './book.js';

export default class Library {
    constructor() {
        this.id = 1;
        this.bookList = [];
    }

    addBookList(title, author, year, description, cover) {
        this.bookList.push(
            new Book(this.id, title, author, year, description, cover)
        );
        this.id++;
    }

    getBookList() {
        return this.bookList;
    }

    getBook(bookId) {
        bookId = parseInt(bookId);
        const book = this.bookList.find((book) => book.id === bookId);
        return book || 'none';
    }

    removeBook(bookId) {
        const index = this.bookList.findIndex(
            (book) => book.id === parseInt(bookId)
        );
        if (index !== -1) {
            this.bookList.splice(index, 1);
        }
    }

    getNewBook() {
        return this.bookList[this.bookList.length - 1];
    }
}