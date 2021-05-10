import React, { Component } from "react";
import MovieTable from "./movieTable";
import PaginationBar from "./common/paginationBar";
import { getMovies } from "../services/fakeMovieService";
import _ from "lodash";
import { paginate } from "../utils/paginate";

class Movie extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
  };

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

  handleLike = (id) => {
    const movies = [...this.state.movies];
    let movie = movies.find((movie) => movie._id == id);
    const index = movies.indexOf(movie);
    movie = { ...movie };

    if (movie.liked) movie.liked = false;
    else movie.liked = true;

    movies[index] = movie;
    this.setState({ movies });
  };

  render() {
    const { movies, currentPage } = this.state;
    const paginatedMovie = paginate(movies, 4, currentPage);
    return (
      <div>
        <p>Showing {movies.length} movies from the database</p>
        <MovieTable
          movies={paginatedMovie}
          onDelete={this.handleDelete}
          onToggle={this.handleLike}
        />
        <PaginationBar
          itemCount={movies.length}
          pageSize={4}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Movie;
