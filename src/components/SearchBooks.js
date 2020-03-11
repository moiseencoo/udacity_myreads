import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';

class SearchBooks extends React.Component {
    state = {
        books: [],
        query: ''
    }

    search(query) {
        BooksAPI.search(query)
        .then(books => {
            this.setState({ books })
        })
    }

    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">
                {" "}
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
              <ol className="books-grid"></ol>
            </div>
          </div>
        );
    }
}

export default SearchBooks