// GLOBALS //

const myLibrary = [];
const modal = document.getElementById("newBookModal");
const addBookBtn = document.getElementById("addBook");
const modalExit = document.getElementById("exit");
const submitBook = document.getElementById("submitBook");
const cardsContainer = document.getElementById("cards");
/*
const readButton = document.getElementById("read");
const unreadButton = document.getElementById("unread");
*/

// BOOK CONSTRUCTOR //

function Books(id, title, author, pageNum, yearPub, cover, description, read) {
    if (!new.target) {
        throw Error("You must use the new operator when calling a constructor");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.yearPub = yearPub;
    this.pageNum = pageNum;
    this.cover = cover;
    this.description = description;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pageNum} pages, published in ${this.yearPub}, ${this.read}`;
    }
}


// FUNCTIONS //

function addBookToLibrary(title, author, yearPub, pageNum, cover, description, read) {

    const objectID = crypto.randomUUID();

    const newBook = new Books(objectID, title, author, pageNum, yearPub, cover, description, read);
    myLibrary.push(newBook);
    addCard(newBook);

    console.log(myLibrary);
    console.log(myLibrary[myLibrary.length - 1].info());
    displayBooks();
}

// DEFAULT LIBRARY //

addBookToLibrary("East of Eden", "John Steinbeck", 1952, 608, 
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639969375i/4406.jpg",
    `East of Eden is a powerful novel by John Steinbeck that explores the intertwined destinies of two families, the Trasks and the Hamiltons,
    set in California's Salinas Valley. The story, echoing the Biblical tale of Adam and Eve, follows Adam Trask and his troubled sons, Cal
    and Aaron, as they struggle with identity, love, and the dark rivalry between them. A modern retelling of the Book of Genesis, Steinbeck's
    1952 masterpiece delves into themes of family, love, and the consequences of its absence.`,
    true
);

addBookToLibrary("Lonesome Dove", "Larry McMurtry", 1985, 864, 
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559668037i/256008.jpg",
    `Lonesome Dove is a Pulitzer Prize-winning epic set in the rugged Texas town of Lonesome Dove. Through unforgettable characters—heroes,
     outlaws, settlers, and Indians—Larry McMurtry weaves a poignant love story and thrilling adventure. Richly authentic and beautifully 
     written, the novel explores the harsh beauty of the American frontier, capturing moments that will make readers laugh, weep, and 
     remember long after the last page.`,
    true
);

addBookToLibrary("The Brothers K", "David James Duncan", 1992, 645, 
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403176622i/19534.jpg",
    `The Brothers K is a sweeping, multi-layered novel by David James Duncan, blending family drama, baseball, politics, and religion. 
    Narrated by Kincaid Chance, the youngest son in a troubled family, it explores the complexities of growing up with a discouraged father 
    and a fanatical mother. Set against the backdrop of the Eisenhower years through the Vietnam War, the novel is both humorous and 
    heartbreaking, offering a richly inventive narrative that captivates with its depth and emotional power.`,
    true
);

addBookToLibrary("Barbarian Days: A Surfing Life", "William Finnegan", 2015, 447,
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1418768620i/18693910.jpg",
    `Barbarian Days is William Finnegan's captivating memoir of his lifelong obsession with surfing, a pursuit that transcends sport to 
    become a way of life. From his childhood in California and Hawaii to globetrotting adventures through the South Pacific, Australia, Asia, 
    and Africa, Finnegan immerses readers in the world of waves and the complex friendships formed around them. His story blends thrilling 
    travel, personal growth, and the intricacies of surfing’s culture, while exploring the social upheavals of the 1960s and the 
    unpredictable adventures of youth. Barbarian Days is a rich blend of adventure, intellectual reflection, and a deep dive into 
    mastering an elusive art.`,
    true
);

addBookToLibrary("The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics", "Daniel James Brown", 
    2013, 404,
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1354683116i/16158542.jpg",
    `The Boys in the Boat tells the inspiring true story of nine working-class boys from the American West who defied the odds to win gold 
    at the 1936 Olympics in Berlin. Against all expectations, this underdog crew team from the University of Washington defeated elite teams 
    from the East Coast, Great Britain, and even Nazi Germany. At the heart of the story is Joe Rantz, a teenager without family or prospects, 
    who rows to rebuild his self-worth and find his place in the world. Drawing on personal journals and memories, Daniel James Brown creates 
    a moving portrait of perseverance, achievement, and the power of teamwork.`,
    false
);


addBookToLibrary("The Pragmatic Programmer: From Journeyman to Master", "Dave Thomas", 1999, 321,
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1401432508i/4099.jpg",
    `The Pragmatic Programmer is a must-read for anyone in the software development field, offering practical advice on producing high-quality, 
    maintainable code. With a focus on core principles like personal responsibility, career development, and creating flexible, 
    adaptable code, this book covers everything from avoiding software rot to testing ruthlessly. Filled with engaging anecdotes and examples, 
    it helps developers at all levels improve productivity, accuracy, and job satisfaction. Whether you're new to coding or a seasoned pro, 
    this book will help you develop the skills and habits that lead to long-term success in your programming career.`,
    false
);

// Create card structure and add card to grid //
function addCard(bookObject) {
    
    // create card container
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = bookObject.id;

    // create image element for cover
    const cover = document.createElement("img");
    cover.src = bookObject.cover;
    card.appendChild(cover);
    
    // create container for content
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content");

    // create container for top
    const topContainer = document.createElement("div")
    topContainer.classList.add("top");

    // add title of book
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = bookObject.title;
    console.log(title.textContent);
    topContainer.appendChild(title);

    // add author of book
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = bookObject.author;
    console.log(author.textContent);
    topContainer.appendChild(author);

    // add book publication year
    const yearPub = document.createElement("p");
    yearPub.classList.add("yearPub");
    yearPub.textContent = `Published in ${bookObject.yearPub}`;
    console.log(yearPub.textContent);
    topContainer.appendChild(yearPub);

    // add page number
    const pageNum = document.createElement("p");
    pageNum.classList.add("pageNum");
    pageNum.textContent = `${bookObject.pageNum} pages`;
    console.log(pageNum.textContent);
    topContainer.appendChild(pageNum);

    // add divider line
    const divider = document.createElement("hr");
    console.log(divider);
    topContainer.appendChild(divider);

    // add top container to content
    contentContainer.appendChild(topContainer);

    // add bottom portion of card
    const bottom = document.createElement("div");
    bottom.classList.add("bottom");
    contentContainer.appendChild(bottom);

    // create container for description
    const descContainer = document.createElement("div");
    descContainer.classList.add("description");
    
    // add book description
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = bookObject.description;
    console.log(description.textContent);
    descContainer.appendChild(description);
    bottom.appendChild(descContainer);

    // add hashtag icon
    
    // add buttons container
    const btns = document.createElement("div");
    btns.classList.add("buttons");

    // add read button
    const read = document.createElement("button");
    read.classList.add("read");
    if (bookObject.read) {
        read.textContent = "Read";
    } else {
        read.textContent = "Not Read"
        read.style.color = "#dda15e";
    }
    btns.appendChild(read);

    // add remove icon

    // add card to the DOM
    bottom.appendChild(btns);
    contentContainer.appendChild(bottom);
    card.appendChild(contentContainer);
    cardsContainer.appendChild(card);
}

// Validate form values
function validateInfo(title, author, yearPub, pageNum, cover) {
    if (!title || titleCase(title) === undefined) {
        alert("Please enter a title for the book");
        return false;
    } else {
        title = titleCase(title);
    }

    if (!author || titleCase(author) === undefined) {
        alert("Please enter a name for the author");
        return false;
    } else {
        author = titleCase(author);
    }

    if (!yearPub) {
        alert("Please enter the year of publication");
        return false;
    }

    if (isNaN(pageNum) || pageNum < 1) {
        alert("Please enter a valid page number");
        return false;
    }

    if (!validateURL(cover)) {
        alert("Please enter a valid URL");
        return false;
    }

    return [title, author, yearPub, pageNum, cover, description, read];
}

// convert strings to title case
function titleCase (str) {
    if (str.length < 0) {
        return undefined;
    } else {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
}

function validateURL (cover) {
    try {
        new URL(cover);
        return true;
    } catch (error) {
        return false;
    }
}

function displayBooks (str = "") {
    cardsContainer.innerHTML = "";

    if (str === "read") {
        const readBooks = myLibrary.filter(book => book.read === true);
        for(const book of readBooks) {
            addCard(book);
        }
    } else if (str === "unread") {
        const unreadBooks = myLibrary.filter(book => book.read === false);
        for(const book of unreadBooks) {
            addCard(book);
        }
    } else {
        for (const book of myLibrary) {
            addCard(book);
        }
    }
}

// open add book modal
addBookBtn.addEventListener("click", (e) => {
    console.log(e.target.closest("li"));
    modal.showModal();
});

// close add book modal
modalExit.addEventListener("click", (e) => {
    e.preventDefault();
    modal.close();
});

// retrieve form values and return
let bookEntry = document.getElementById("bookEntry");
bookEntry.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let yearPub = document.getElementById("yearPub").value;
    let pageNum = document.getElementById("pageNum").value;
    let cover = document.getElementById("cover").value;
    let description = document.getElementById("description").value;
    let read = document.getElementById("read").checked;

    let validated = validateInfo(title, author, yearPub, pageNum, cover);
    if (validated) {
        title = validated[0];
        author = validated[1];
        yearPub = validated[2];
        pageNum = validated[3];
        cover = validated[4];
        description = validated[5];
        read = validated[6];
        addBookToLibrary(title, author, yearPub, pageNum, cover, description, read);
    }
});

// event listeners for read status and removing book
document.addEventListener("click", (e) => {
    if (e.target.matches("button.read")) {
        let parentCard = e.target.closest(".card");
        const bookObject = myLibrary.find((bookObject) => bookObject.id === parentCard.id);

        if (e.target.textContent === "Read") {
            e.target.textContent = "Not Read";
            e.target.style.color = "#dda15e";
            bookObject.read = false;
        } else if (e.target.textContent === "Not Read") {
            e.target.textContent = "Read";
            e.target.style.color = "#606c38";
            bookObject.read = true;
        }
    }


    if (e.target.closest("button.delete")) {
        let parentCard = e.target.closest(".card");
        const bookIndex = myLibrary.findIndex((bookObject) => bookObject.id === parentCard.id);
        myLibrary.splice(bookIndex, 1);
        displayBooks();
    }
});
