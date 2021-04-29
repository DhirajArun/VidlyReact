import React, { Component } from "react";
import Table from "./common/table";
import Pagination from "./pagination";
import { getMovies } from "../services/fakeMovieService";
import _ from "underscore";

class Movie extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
  };

  getViewedMovies() {
    const { movies, currentPage } = this.state;
    return movies.slice((currentPage - 1) * 4, currentPage * 4);
  }

  getPages() {
    const moviLength = this.state.movies.length;
    const totalPage =
      moviLength / 4 === Math.floor(moviLength / 4)
        ? moviLength / 4
        : Math.floor(moviLength / 4) + 1;
    const pages = _.range(1, totalPage + 1);
    return pages;
  }

  handleDelete = (movie) => {
    const sMovies = [...this.state.movies];
    const currentPage = this.state.currentPage;
    const movies = sMovies.filter((value) => value._id !== movie._id);
    this.setState({ movies });
    if (movies.length <= currentPage * 4 - 4 && currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  handlePageChange = (pageNo) => {
    this.setState({ currentPage: pageNo });
  };

  render() {
    return (
      <div>
        <Table movies={this.getViewedMovies()} onDelete={this.handleDelete} />
        <Pagination
          pages={this.getPages()}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movie;
