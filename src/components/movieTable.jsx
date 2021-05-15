import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";
import { Link } from "react-router-dom";

class MovieTable extends Component {
  columns = [
    {
      label: "Title",
      path: "title",
      key: "link",
      content: (movie) => {
        return <Link to={"/movies/" + movie._id}>{movie.title}</Link>;
      },
    },

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
