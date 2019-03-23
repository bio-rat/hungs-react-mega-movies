import React, { Component } from 'react';
import MovieCard from './MovieCard';


export default class MoviesList extends Component {
  render() {
    return (
      <div className="col-md-9">
        <div className="row hidden-md-up">
          {this.props.movies.map(x => {
            return <MovieCard key={x.id} posterUrl={x.poster_path} title={x.title} year={x.release_date} rating={x.vote_average} />;
          })}
        </div>
      </div>
    )
  }
}
