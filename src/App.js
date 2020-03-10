import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import "./App.css";

import BookList from "./components/BookList";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  getData() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

  onChangeShelf() {
    console.log("OMG");
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              books={this.state.books}
              onChangeShelf={this.onChangeShelf}
            />
          )}
        />

        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
