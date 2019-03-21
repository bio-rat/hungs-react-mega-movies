import React, { Component } from 'react';
import MovieCard from './MovieCard';


export default class MoviesList extends Component {
  render() {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up">
            {this.props.movies.map(x => 
              <MovieCard posterUrl={x.poster_path} title={x.title} year={x.release_date} rating={x.vote_average} />
            )}
          </div>
        </div>
      </div>
    )
  }
}
