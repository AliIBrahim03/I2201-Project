console.log("home.js loaded");

// Function to handle buying a book
function buyBook(title, imageUrl) {
    // Create a book object
    const book = {
        title: title,
        imageUrl: imageUrl
    };

    // Get the existing list of bought books from localStorage
    let books = JSON.parse(localStorage.getItem('myBooks')) || [];

    // Add the new book to the list
    books.push(book);

    // Save the updated list back to localStorage
    localStorage.setItem('myBooks', JSON.stringify(books));

    alert('Book added to My Books!');
}
