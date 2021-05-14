import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class MovieTable extends Component {
  columns = [
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
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;
    const moviLength = movies.length;

    if (moviLength === 0) {
      return;
    }
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MovieTable;
