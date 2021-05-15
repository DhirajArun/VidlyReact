import './App.css';
import React, {Component} from 'react'
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/not-found';
import NavBar from './components/navbar';
import { Route, Switch, Redirect} from 'react-router-dom';


function App() {
  return (
    <React.Fragment className="App">
      <NavBar />
      <Switch>
        <Redirect from="/" exact to="/movies" />
        <Route path='/movies/:id' component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/customers' component={Customers} />
        <Route path='/not-found' component={NotFound} />
        <Redirect to='/not-found' />
      </Switch>
    </React.Fragment>
  );
}

export default App;
