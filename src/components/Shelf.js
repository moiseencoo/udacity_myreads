import React from "react";
import Book from "./Book";
import "./Shelf.css";

class Shelf extends React.Component {
  render() {
    const { shelfTitle, books, onChangeShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book
                  id={book.id}
                  title={book.title}
                  imageLink={book.imageLinks.thumbnail}
                  authors={book.authors}
                  shelf={book.shelf}
                  onChangeShelf={onChangeShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
