import React from "react";
import Shelf from "./Shelf";

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
    ]
    return (
      <React.Fragment>
        <div className="list-books-content">
          <div>
            {
                shelves.map((shelf) => {
                    let filtered_books = books.filter((book) => book.shelf === shelf.slug)
                    return (
                        <Shelf shelfTitle={shelf.name} books={filtered_books} />
                    )
                })
            }
          </div>
        </div>
        <div className="open-search">
          <button>Add a book</button>
        </div>
      </React.Fragment>
    );
  }
}

export default BookList;
