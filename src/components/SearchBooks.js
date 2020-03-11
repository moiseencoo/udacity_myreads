import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class SearchBooks extends React.Component {
  state = {
    books: [],
    query: ""
  };

  search(query) {
    BooksAPI.search(query)
      .then(books => {
        if (books.length > 0) {
          this.setState({ books });
        } else {
          this.setState({ books: [] });
        }
      })
      .catch(e => console.log(e));
  }

  render() {
    const { onChangeShelf, booksOnShelves } = this.props;
    console.log(onChangeShelf)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.search(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <Book book={book} onChangeShelf={onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
