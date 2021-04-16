import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    const { pages, onPageChange } = this.props;
    return (
      <ul style={{ listStyle: "none" }}>
        {pages.map((pageNo) => (
          <li key={pageNo} style={{ display: "inline" }}>
            <button onClick={() => onPageChange(pageNo)}>{pageNo}</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Pagination;
