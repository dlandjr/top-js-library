const myLibrary = [];

function Book(title, author, year, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.isRead = isRead;
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
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Published in: ${book.year}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.isRead ? "Yes" : "No"}</p>
        `;
        libraryContainer.appendChild(bookCard);
    });
}

addBooktoLibrary("East of Eden", "John Steinbeck", 1952, 608, true);
addBooktoLibrary("Lonesome Dove", "Larry McMurtry", 1985, 864, true);
addBooktoLibrary("The Brothers K", "David James Duncan", 1992, 645, true);
addBooktoLibrary("Barbarian Days: A Surfing Life", "William Finnegan", 2015, 447, true);
addBooktoLibrary("The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics", "Daniel James Brown", 2013, 404, false);
addBooktoLibrary("The Pragmatic Programmer: From Journeyman to Master", "Dave Thomas", 1999, 321, false);

console.log(myLibrary);
displayBooks();