import React from 'react';
import Book from './Book'
import'./Shelf.css'

class Shelf extends React.Component {

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <Book id={book.id} title={book.title} imageLink={book.imageLinks.thumbnail} authors={book.authors} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }


}

export default Shelf;