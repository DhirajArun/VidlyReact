import React, { Component } from "react";
import THead from "./thead";
import TBody from "./tbody";
import Like from "./like";

class Table extends Component {
  render() {
    const { columns, data } = this.props;
    return (
      <table>
        <THead columns={columns} />
        <TBody columns={columns} data={data} />
      </table>
    );
  }
}

export default Table;
