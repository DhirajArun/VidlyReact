import React, { Component } from 'react';
import {getMovies, getmovie, saveMovie, deleteMovie} from '../services/fakeMovieService';

class Table extends Component {
    render() {
        const {movies, onDelete} = this.props;
        const moviLength = movies.length;
        return (
            <div>
                {moviLength === 0 ? <p>There are no movies</p> : <p>Showing {moviLength} movies from database</p>}
                <table>
                    <thead>
                        {
                            moviLength > 0 && 
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        }
                    </thead>
                    <tbody>
                        {movies.map((movie)=> {
                            return (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td onClick={()=>{onDelete(movie)}}><button>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Table;
