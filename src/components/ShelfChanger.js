import React from "react";

class ShelfChanger extends React.Component {

  state = {
    currentValue: 'none'
  }

  selectValue(event) {
    this.props.onChangeShelf(this.props.book, event);
    this.setState({currentValue: event})
  }

  render() {
    const { shelf } = this.props;

    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => this.selectValue(event.target.value)}
          value={shelf ? shelf : this.state.currentValue}
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
