import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class SearchBooks extends React.Component {
  state = {
    books: [],
    query: "",
    notFoundMessage: false
  };

  search(query) {
    if (query !== '') {
      BooksAPI.search(query)
      .then(books => {
        if (books.length > 0) {
          this.setState({ notFoundMessage: false});
          this.setState({ books });
        } else {
          this.clearSearchResults();
          this.setState({ notFoundMessage: true});
        }
      })
      .catch(e => console.log(e));
    } else {
      this.clearSearchResults();
    }
  }

  clearSearchResults() {
    this.setState({ books: [] });
  }

  allBooks() {
    return this.state.books.map((book) => {
      this.props.booksOnShelves.forEach(bookOnShelf => {
        book.id === bookOnShelf.id && (book.shelf = bookOnShelf.shelf);
      });
      return book
    })
  }

  render() {
    const { onChangeShelf } = this.props;
    let errorMessage;

    if (this.state.notFoundMessage) {
      errorMessage = <h2>Nothing Found</h2>;
    }

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
          {errorMessage}
          <ol className="books-grid">
            {this.allBooks().map(book => (
              <Book book={book} onChangeShelf={onChangeShelf} key={book.id} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
