import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from './MoviesList';




class App extends Component {

  constructor() {
    super();
    this.state = {
      results: [],
    }
  }

  componentDidMount = () => {
    this.getMoviesSpecs();
  }

  getMoviesSpecs = () => {
    const API_KEY = "b2c1160c5fb292502b2d762fc2485fd3";
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    fetch(api)
    .then(response => response.json())
    .then(response => response.results)
    .then(movies => {
      this.setState({
        results: movies,
      });
    })


  }


  render() {
    const movies = this.state.results;

    return (

    <MoviesList movies={movies} />

    );//end of return




  }//end of render


}

export default App;
