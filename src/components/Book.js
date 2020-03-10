import React from 'react';
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from '../BooksAPI'

import './Book.css';

function Book(props){
  
  const {id, imageLink, title, authors, shelf} = props;

  const changeShelf = (shelf) => {
    BooksAPI.update(id, shelf).then((defs) => {
      console.log(defs);
    });
  }

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

      <ShelfChanger shelf={shelf} changeShelf={changeShelf} />

      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {
          authors.join(', ')
        }
      </div>
    </div>
  );
}

export default Book;