import React, { Component } from 'react';
import Table from './table';
import Pagination from './pagination';
import {getMovies, getmovie, saveMovie, deleteMovie} from '../services/fakeMovieService';

class Movie extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = (movie) => {
        const sMovies = [...this.state.movies];
        const movies = sMovies.filter((value) => value._id != movie._id);
        this.setState({ movies });
    }

    render() { 
        return (  
            <div>
                <Table movies={this.state.movies} onDelete={this.handleDelete} />
                <Pagination />
            </div>
        );
    }
}
 
export default Movie;