import React, { Component } from "react";

class THead extends Component {
  state = {};
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.path || column.key}>{column.label}</th>;
          })}
        </tr>
      </thead>
    );
  }
}

export default THead;
