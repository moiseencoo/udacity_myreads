import React from "react";
import ShelfChanger from "./ShelfChanger";
import * as BooksAPI from "../BooksAPI";

import "./Book.css";

function Book(props) {
  const { id, imageLink, title, authors, shelf, onChangeShelf } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLink})`
          }}
        ></div>

        <ShelfChanger bookID={id} shelf={shelf} onChangeShelf={onChangeShelf} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(" ")}</div>
    </div>
  );
}

export default Book;
