const myLibrary = [];

function Book(title, author, year, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

function addBooktoLibrary(title, author, year, pages, isRead) {
    const newBook = new Book(title, author, year, pages, isRead);
    myLibrary.push(newBook);
}

function displayBooks() {
    const libraryContainer = document.getElementById("library");
    libraryContainer.innerHTML = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.setAttribute("data-id", book.id);

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Published in: ${book.year}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: <span>${book.isRead ? "Yes" : "No"}</span></p>
            <button class="toggle-read">Toggle Read</button>
            <button class="removeBook">Remove</button>
        `;

        bookCard.querySelector(".toggle-read").addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        });

        bookCard.querySelector(".remove-book").addEventListener("click", () => {
            removeBook(book.id);
        });

        libraryContainer.appendChild(bookCard);
    });
}

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
    displayBooks();
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("bookModal");
    const openModalBtn = document.getElementById("newBookBtn");
    const closeModalBtn = document.getElementById("closeModal");
    const bookForm = document.getElementById("bookForm");

    openModalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    bookForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = document.getElementById("year").value;
        const pages = document.getElementById("pages").value;
        const isRead = document.getElementById("isRead").checked;

        addBooktoLibrary(title, author, year, pages, isRead);
        displayBooks();

        bookForm.reset();
        modal.style.display = "none";
    });
});

addBooktoLibrary("East of Eden", "John Steinbeck", 1952, 608, true);
addBooktoLibrary("Lonesome Dove", "Larry McMurtry", 1985, 864, true);
addBooktoLibrary("The Brothers K", "David James Duncan", 1992, 645, true);
addBooktoLibrary("Barbarian Days: A Surfing Life", "William Finnegan", 2015, 447, true);
addBooktoLibrary("The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics", "Daniel James Brown", 2013, 404, false);
addBooktoLibrary("The Pragmatic Programmer: From Journeyman to Master", "Dave Thomas", 1999, 321, false);

displayBooks();