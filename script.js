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

function addBookToLibrary(title, author, year, pages, isRead) {
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

        const readLabelText = book.isRead ? "Read" : "Unread";
        const readLabelColor = book.isRead ? "#2ecc71" : "#e74c3c"; // Green for Read, Red for Unread

        bookCard.innerHTML = `
            <span class="remove-book" aria-label="Remove Book">×</span>
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Published in: ${book.year}</p>
            <p>Pages: ${book.pages}</p>
            <div class="read-status">
                <label class="switch">
                    <input type="checkbox" class="toggle-read" aria-label="Toggle Read Status" ${book.isRead ? "checked" : ""}>
                    <span class="slider round"></span>
                </label>
                <span class="read-label" style="color: ${readLabelColor}">${readLabelText}</span>
            </div>
        `;

        const removeButton = bookCard.querySelector(".remove-book");
        removeButton.addEventListener("click", () => {
            removeBook(book.id);
        });

        const toggleReadCheckbox = bookCard.querySelector(".toggle-read");
        toggleReadCheckbox.addEventListener("change", (event) => {
            book.toggleRead();
            const readLabel = bookCard.querySelector(".read-label");
            readLabel.textContent = book.isRead ? "Read" : "Unread";
            readLabel.style.color = book.isRead ? "#2ecc71" : "#e74c3c"; // Update color based on the read status
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

        addBookToLibrary(title, author, year, pages, isRead);
        displayBooks();

        bookForm.reset();
        modal.style.display = "none";
    });
});

addBookToLibrary("East of Eden", "John Steinbeck", 1952, 608, true);
addBookToLibrary("Lonesome Dove", "Larry McMurtry", 1985, 864, true);
addBookToLibrary("The Brothers K", "David James Duncan", 1992, 645, true);
addBookToLibrary("Barbarian Days: A Surfing Life", "William Finnegan", 2015, 447, true);
addBookToLibrary("The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics", "Daniel James Brown", 2013, 404, false);
addBookToLibrary("The Pragmatic Programmer: From Journeyman to Master", "Dave Thomas", 1999, 321, false);

displayBooks();
