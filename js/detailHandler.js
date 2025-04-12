import { getBook } from './dataHandler.js';

export class BookCardInteraction {
    constructor() {
        this.wrapper = document.querySelector('.wrapper');
        this.bookCards = this.wrapper.querySelectorAll('.book-cards');
        this.dialog = document.querySelector('#bookDetailsDialog');
        this.closeButtonDialog = this.dialog.querySelector('.close-button-dialog');
        this.bookTitle = this.dialog.querySelector('.book-details-dialog__title');
        this.bookAuthor = this.dialog.querySelector('.book-details-dialog__author');
        this.bookYear = this.dialog.querySelector('book-details-dialog__year');
        this.currentDescription = this.dialog.querySelector('.current-description');

        this.initialize();
    }

    initialize() {
        this.wrapper.addEventListener(
            'click',
            this.bookCardsClickHandler.bind(this)
        );
    this.closeButtonDialog.addEventListener('click', () => this.closeDialog);
    }

    bookCardsClickHandler(e) {
        const bookCard = e.target.closest('.book-cards');
        const checkClickUserOne = 
    }
}