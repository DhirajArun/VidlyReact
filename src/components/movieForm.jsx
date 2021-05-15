import React, { Component } from "react";

class MovieForm extends Component {
  state = {};

  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <p>movie id: {this.props.match.params.id}</p>
        <button onClick={() => this.handleSave()}>Save</button>
      </div>
    );
  }
}

export default MovieForm;
