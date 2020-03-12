import React from "react";

class ShelfChanger extends React.Component {
  render() {
    const { book, shelf, onChangeShelf } = this.props;

    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => onChangeShelf(book, event.target.value)}
          value={shelf ? shelf : 'none'}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
