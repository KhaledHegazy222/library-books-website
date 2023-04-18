class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pagesNumber = 0,
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pagesNumber = parseInt(pagesNumber);
    this.isRead = Boolean(isRead);
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getBook(title) {
    return this.books.find((bookEntry) => bookEntry.title === title);
  }

  removeBook(title) {
    this.books = this.books.filter((bookEntry) => bookEntry.title !== title);
  }
}

function toggleFormDisplay() {
  if (formContainer.classList.contains("visible")) {
    formContainer.classList.remove("visible");
  } else {
    formContainer.classList.add("visible");
  }
}

function addToDom(book) {
  const bookCard = document.createElement("li");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const bookIsRead = document.createElement("p");
  const removeBtn = document.createElement("button");
  bookTitle.innerText = `Title: ${book.title}`;
  bookAuthor.innerText = `Author: ${book.author}`;
  bookPages.innerText = `Pages Number: ${book.pagesNumber}`;
  bookIsRead.innerText = `Is Read: ${book.isRead}`;
  removeBtn.innerText = "Remove";
  removeBtn.onclick = (e) => {
    e.target.parentElement.remove();
  };
  bookCard.append(bookTitle, bookAuthor, bookPages, bookIsRead, removeBtn);
  bookCard.setAttribute("data-id", book.title);

  booksList.appendChild(bookCard);
}

function removeFromDom(book) {
  const bookCard = document.querySelector(`[data-id="${book.title}"]`);
  bookCard.remove();
}

const booksList = document.getElementById("books-list");
const formContainer = document.getElementById("form-container");
const bookFrom = document.getElementById("add-book-form");

bookFrom.addEventListener("submit", (event) => {
  const bookTitleInput = document.getElementById("book-title");
  const bookAuthonInput = document.getElementById("book-author");
  const bookPagesNumberInput = document.getElementById("book-pages");
  const bookIsReadInput = document.getElementById("book-is-read");
  const book = new Book(
    bookTitleInput.value,
    bookAuthonInput.value,
    bookPagesNumberInput.value,
    bookIsReadInput.checked
  );
  addToDom(book);
  booksLibrary.addBook(book);
  event.preventDefault();
  bookFrom.reset();
  toggleFormDisplay();
});

booksLibrary = new Library();
var myBook;
myBook = new Book("Game of thrones", "Me", 1, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 2, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 3, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 4, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 5, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 6, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 7, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 8, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 9, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 10, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 11, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 12, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
myBook = new Book("Game of thrones", "Me", 13, false);
booksLibrary.addBook(myBook);
addToDom(myBook);
