import React, { Component } from "react";
import THead from "./thead";
import TBody from "./tbody";
import Like from "./like";

class Table extends Component {
  state = {
    columns: [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: (movie) => {
          return (
            <Like
              liked={movie.liked}
              onToggle={() => {
                return this.props.onToggle(movie._id);
              }}
            ></Like>
          );
        },
      },
      {
        key: "delete",
        content: (movie) => {
          return (
            <button
              onClick={() => {
                this.props.onDelete(movie);
              }}
            >
              Delete
            </button>
          );
        },
      },
    ],
  };
  render() {
    const { movies } = this.props;
    const moviLength = movies.length;

    if (moviLength === 0) {
      return <p>There are no movies</p>;
    }

    return (
      <div>
        <p>Showing {moviLength} movies from database</p>

        <table>
          <THead columns={this.state.columns} />
          <TBody columns={this.state.columns} data={movies} />
        </table>
      </div>
    );
  }
}

export default Table;
