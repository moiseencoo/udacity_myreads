import React from "react";
import ShelfChanger from "./ShelfChanger";

import "./Book.css";

function Book(props) {
  const { book, onChangeShelf } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.smallThumbnail : ""
            })`
          }}
        ></div>

        <ShelfChanger
          book={book}
          shelf={book.shelf}
          onChangeShelf={onChangeShelf}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(" ")}
      </div>
    </div>
  );
}

export default Book;
