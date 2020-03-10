import React from "react";
import Shelf from "./Shelf";
import { Link } from 'react-router-dom'

class BookList extends React.Component {
  render() {
    const { books } = this.props;

    const shelves = [
      {
        name: "Currently Reading",
        slug: "currentlyReading"
      },
      {
        name: "Want To Read",
        slug: "wantToRead"
      },
      {
        name: "Read",
        slug: "read"
      }
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => {
              let filtered_books = books.filter(
                book => book.shelf === shelf.slug
              );
              return <Shelf shelfTitle={shelf.name} books={filtered_books} />;
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="btn-add">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BookList;
