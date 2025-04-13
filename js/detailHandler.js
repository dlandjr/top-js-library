import { getBook } from './dataHandler.js';

export class BookCardInteraction {
    constructor() {
        this.wrapper = document.querySelector('.wrapper');
        this.bookCards = this.wrapper.querySelectorAll('.book-cards');
        this.dialog = document.querySelector('#bookDetailsDialog');
        this.closeButtonDialog = this.dialog.querySelector('.close-button-dialog');
        this.bookTitle = this.dialog.querySelector('.book-details-dialog__title');
        this.bookAuthor = this.dialog.querySelector('.book-details-dialog__author');
        this.bookYear = this.dialog.querySelector('.book-details-dialog__year');
        this.currentDescription = this.dialog.querySelector('.current-description');

        this.initialize();
    }

    initialize() {
        this.wrapper.addEventListener(
            'click',
            this.bookCardsClickHandler.bind(this)
        );
    this.closeButtonDialog.addEventListener('click', () => this.closeDialog());
    }

    bookCardsClickHandler(e) {
        const bookCard = e.target.closest('.book-cards');

        if (bookCard) {
            const bookId = bookCard.dataset.bookId;
            this.fetchBook(bookId);
        }
    }

    async fetchBook(bookId) {
        const processedBook = await getBook(bookId);
        this.showBookDetails(processedBook);
    }

    showBookDetails(book) {
        const bookDetails = {
            title: book.title,
            author: book.author,
            year: book.year,
            description: book.description,
        };

        this.openDialog(bookDetails);
    }

    openDialog(book) {
        this.dialog.showModal();
        this.detailManagement(book);
    }

    closeDialog() {
        this.dialog.close();
    }

    detailManagement(book) {
        this.bookTitle.textContent = book.title;
        this.bookAuthor.textContent = book.author;
        this.bookYear.textContent = book.year;
        this.currentDescription.textContent = book.description;
    }
}