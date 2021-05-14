import React, { Component } from "react";
import THead from "./thead";
import TBody from "./tbody";

class Table extends Component {
  render() {
    const { columns, data, sortColumn, onSort } = this.props;
    return (
      <table>
        <THead columns={columns} sortColumn={sortColumn} onSort={onSort} />
        <TBody columns={columns} data={data} />
      </table>
    );
  }
}

export default Table;
