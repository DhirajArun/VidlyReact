import React, { Component } from "react";

class ListGroup extends Component {
  state = {};
  render() {
    const { items, textProperty, valueProperty, onListChange } = this.props;
    return (
      <ul style={{ listStyle: "none", cursor: "pointer" }}>
        {items.map((item) => {
          return (
            <li
              key={item[valueProperty]}
              onClick={() => {
                onListChange(item);
              }}
            >
              {item[textProperty]}
            </li>
          );
        })}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
