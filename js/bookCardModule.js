export default class BookCardModule {
    constructor(data) {
        this.data = data; // this is the data from the dataHandler.js -> library.js in object format
        this.elements = {};
        this.wrapper = this.getParentNode();
    }

    getParentNode() {
        return document.querySelector('.wrapper');
    }

    createBookCardElements() {
        this.elements.bookCards = document.createElement('div');

        this.elements.bookCover = document.createElement('img');
        this.elements.descriptionWrapper = document.createElement('div');

        this.elements.bookDescription = document.createElement('p');
        this.elements.bookTitle = document.createElement('p');
        this.elements.bookAuthor = document.createElement('p');
        this.elements.bookYear = document.createElement('p');
    }

    setAttributesManager() {
        this.setBookCards();

        this.setBookCardComponent();

        this.setDescriptionWrapperComponent();

        this.setBookDescriptionComponent();
    }

    setBookCards() {
        this.elements.bookCards.classList.add('book-cards');
        this.elements.bookCards.setAttribute('data-book-id', this.data.id);
    }

    imageHandler(image) {
        if (!image || image.length === 0) {
            return ''; //url for image of choice
        }
        return image.trim();
    }

    altHandler(alt) {
        return alt || 'A random generated image placeholder';
    }

    setBookCardComponent() {
        const image = this.imageHandler(this.data.url);
        const alt = this.altHandler(this.data.alt);

        this.elements.bookCover.setAttribute('src', image);
        this.elements.bookCover.setAttribute('alt', alt);

        this.elements.descriptionWrapper.classList.add('description-wrapper');
    }

    setDescriptionWrapperComponent() {
        this.elements.bookDescription.classList.add('book-description');
    }

    setBookDescriptionComponent() {
        this.elements.bookTitle.classList.add('book-title');
        this.elements.bookTitle.textContent = this.data.title;

        this.elements.bookAuthor.classList.add('book-author');
        this.elements.bookAuthor.textContent = this.data.author;

        this.elements.bookYear.classList.add('book-year');
        this.elements.bookYear.textContent = this.data.year;
    }

    assembleElements() {
        this.elements.bookDescription.append(
            this.elements.bookTitle,
            this.elements.bookAuthor,
            this.elements.bookYear
        );

        this.elements.descriptionWrapper.append(
            this.elements.bookDescription
        );

        this.elements.bookCards.append(
            this.elements.bookCover,
            this.elements.descriptionWrapper
        );

        this.wrapper.appendChild(this.elements.bookCards);
    }

    renderCard() {
        this.createBookCardElements();
        this.setAttributesManager();
        this.assembleElements();
    }
}