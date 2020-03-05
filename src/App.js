import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelf'

class BooksApp extends React.Component {
  state = {
    data: [],
    showSearchPage: false
  }

  getData(){
     BooksAPI.getAll().then((defs) => {
       this.setState({
         data: defs
       });
     });
  }

  currentlyReading() {
    return this.state.data.filter((el) =>  el.shelf == "currentlyReading" )
  }

  wantToRead() {
    return this.state.data.filter((el) =>  el.shelf == "wantToRead" )
  }

  read() {
    return this.state.data.filter((el) =>  el.shelf == "read" )
  }


  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  shelfTitle="Currently Reading"
                  books={this.currentlyReading()}
                />
                <Shelf shelfTitle="Want to Read" books={this.wantToRead()} />
                <Shelf shelfTitle="Read" books={this.read()} />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp
