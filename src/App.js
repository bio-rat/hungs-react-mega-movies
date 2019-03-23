import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-input-range/lib/css/index.css';


import MoviesList from './MoviesList';
import SearchMovies from './SearchMovies';
import RangeFilterSection from './RangeFilterSection';
import GenreSelect from './GenreSelect';


class App extends Component {

  constructor() {
    super();
    this.state = {
      results: [],
      filterText: '',
      filterYear: { min: 0, max: 10, },
      filterRating: { min: 0, max: 10, },
      genresList: [],
      chosenGenre: '',
      orYear: { orMin: 0, orMax: 10},
      orRating: { orMin: 0, orMax: 10},
    }
  }

  componentDidMount = () => {
    this.getGenres();
    this.getMoviesSpecs();
  }

  getMoviesSpecs = () => {
    const API_KEY = "b2c1160c5fb292502b2d762fc2485fd3";
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.state.chosenGenre}`;

    fetch(api)
    .then(response => response.json())
    .then(response => response.results)
    .then(movies => {
      this.setState({
        results: movies,
        filterYear: {
          min: Math.min(...movies.map(movie => movie.release_date.substring(0, 4))),
          max: Math.max(...movies.map(movie => movie.release_date.substring(0, 4))),
        },
        filterRating: {
          min: Math.min(...movies.map(movie => movie.vote_average)),
          max: Math.max(...movies.map(movie => movie.vote_average)),
        },
        orYear: {
          orMin: Math.min(...movies.map(movie => movie.release_date.substring(0, 4))),
          orMax: Math.max(...movies.map(movie => movie.release_date.substring(0, 4))),
        },
        orRating: {
          orMin: Math.min(...movies.map(movie => movie.vote_average)),
          orMax: Math.max(...movies.map(movie => movie.vote_average)),
        },
        
      });
    })
  }

  getGenres = () => {
    const api = `https://api.themoviedb.org/3/genre/movie/list?api_key=b2c1160c5fb292502b2d762fc2485fd3&language=en-US
    `;
    fetch(api)
    .then(response => response.json())
    .then(response => this.setState({
      genresList: response.genres,
    }
    ));
  }

  handleFilterTextChange = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  }

  handleYearChange = (value) => {
    this.setState({ filterYear: value });
  }

  handleRatingChange = (value) => {
    this.setState({ filterRating: value });
  }

  handleSelectGenre = (e) => {
    this.setState({
      chosenGenre: e.target.value,
    }, this.getMoviesSpecs);
  }

  render() {

    const filterText = this.state.filterText;
    const filterYear = this.state.filterYear;
    const filterRating = this.state.filterRating;

    const orYear = this.state.orYear;

    const orRating = this.state.orRating;


    const movies = this.state.results.filter(x => 
      x.title.toLowerCase().includes( filterText.toLowerCase() ) && (x.release_date.substring(0, 4) <= filterYear.max) && (x.release_date.substring(0, 4) >= filterYear.min) && (x.vote_average <= filterRating.max) && (x.vote_average >= filterRating.min)
    );

    const genresList = this.state.genresList;

    return (
    <div className="container-fluid row">
      <div className="col-md-3 mt-5">
        <div className="text-danger">Total movies: {movies.length}</div>

        <GenreSelect genresList={genresList} onSelectGenre={this.handleSelectGenre} />

        <SearchMovies onSearch={this.handleFilterTextChange} />

        <RangeFilterSection onFilterYear={value => this.handleYearChange(value)} onFilterRating={value => this.handleRatingChange(value)} orYear={orYear} filterYear={filterYear} orRating={orRating} filterRating={filterRating} />

      </div>
      <MoviesList filterText={filterText} movies={movies} filterYear={filterYear}/>
    </div>

    );//end of return




  }//end of render


}

export default App;
