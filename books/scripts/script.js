var myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Math.random().toString(36).split('.')[1];
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

function createCard(book) {
    var doc = document.getElementsByClassName("mainBody");
    var card = document.createElement("div");
    var title = document.createElement("h2");
    var author = document.createElement("p");
    var pages = document.createElement("p");
    var read = document.createElement("select");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("data-id", book.id);
    deleteBtn.addEventListener('click', function(event) {
        deleteCard(event);
    })

    read.setAttribute("class", "dropdown");
    card.setAttribute("class", "card");
    card.setAttribute("data-id", book.id);
    deleteBtn.setAttribute("class", "deleteBtn");

    title.textContent = book.title.length > 0 ? book.title : "Some book";
    author.textContent = book.author.length > 0 ? "By " + book.author : "By A. Author";
    pages.textContent = book.pages.length > 0 ? book.pages + " pages" : "To infinity!";
    read.options.add(new Option("Read"));
    read.options.add(new Option("Unread"));
    read.value = book.read;

    for (element of[title, author, pages, read, deleteBtn]) {
        card.appendChild(element);
    }
    doc[0].appendChild(card);
}

function render(book) {
    createCard(book)
}

function openForm() {
    var form = document.getElementById("myForm");
    form.style.display = "block";
}

function cancelForm() {
    var form = document.getElementById("myForm");
    form.getElementsByClassName("form-container")[0].reset();
    form.style.display = "none";
}

function deleteCard(addEventListener) {
    let bookID = event.target.attributes['data-id'].nodeValue;
    document.querySelector(`[data-id='${bookID}']`).remove();
    myLibrary = myLibrary.filter((book) => book.id != bookID);
}

function submitForm() {
    var form = document.getElementById("myForm");
    form.style.display = "none";
    let inputs = [...form.getElementsByTagName("input")].concat([...form.getElementsByTagName("select")]);
    args = inputs.map((i) => i.value);
    let newBook = new Book(...args);
    addBooktoLibrary(newBook);
    render(newBook);
    cancelForm()
}

btn = document.getElementsByClassName("newButton")
btn[0].addEventListener('click', function() {
    openForm();
});

submit = document.getElementsByClassName("btn")[0]
submit.addEventListener('click', function() {
    submitForm();
});

book1 = new Book("The Count of Monte Cristo", "A. Dumas", "1312", "Read")
book2 = new Book("Perfume: The story of a murderer", "P. Süskind", "263", "Read")
addBooktoLibrary(book1)
addBooktoLibrary(book2)
render(book1);
render(book2);

cancelForm();