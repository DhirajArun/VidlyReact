import React, { Component } from "react";
import MovieTable from "./movieTable";
import PaginationBar from "./common/paginationBar";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import { paginate } from "../utils/paginate";

class Movie extends Component {
  state = {
    movies: getMovies(),
    genres: [{ _id: "564ad83s", name: "All Movies" }, ...getGenres()],
    currentGenre: "564ad83s",
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
    let movie = movies.find((movie) => movie._id === id);
    const index = movies.indexOf(movie);
    movie = { ...movie };

    if (movie.liked) movie.liked = false;
    else movie.liked = true;

    movies[index] = movie;
    this.setState({ movies });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre._id, currentPage: 1 });
  };

  filterMovie = function (movies, currentGenreId) {
    if (currentGenreId === "564ad83s") return movies;

    const filtered = movies.filter((movie) => {
      return movie.genre._id === currentGenreId;
    });
    return filtered;
  };

  render() {
    const { movies, currentPage, genres, currentGenre } = this.state;
    const filteredMovie = this.filterMovie(movies, currentGenre);
    const paginatedMovie = paginate(filteredMovie, 4, currentPage);
    return (
      <div>
        <ListGroup items={genres} onListChange={this.handleGenreChange} />
        <p>Showing {movies.length} movies from the database</p>
        <MovieTable
          movies={paginatedMovie}
          onDelete={this.handleDelete}
          onToggle={this.handleLike}
        />
        <PaginationBar
          itemCount={filteredMovie.length}
          pageSize={4}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Movie;
