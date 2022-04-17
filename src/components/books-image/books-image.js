import booksImage from "./books.jpg";
import "./books.scss";

// Create a class for a book component
class Books {
  render() {
    const img = document.createElement("img");
    img.src = booksImage;
    img.alt = "Books image";
    img.classList.add("books-image");
    const bodyDomElement = document.querySelector("body");
    bodyDomElement.appendChild(img);
  }
}

export default Books;
