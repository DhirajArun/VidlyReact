import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

class PaginationBar extends Component {
  state = {};
  getPages() {
    const { itemCount, pageSize } = this.props;
    const totalPage =
      itemCount / pageSize === Math.floor(itemCount / pageSize)
        ? itemCount / pageSize
        : Math.floor(itemCount / pageSize) + 1;
    const pages = _.range(1, totalPage + 1);
    return pages;
  }
  render() {
    const { onPageChange, currentPage } = this.props;
    const pages = this.getPages();
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

PaginationBar.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationBar;
