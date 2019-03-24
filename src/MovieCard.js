import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const BASE_URL = "https://image.tmdb.org/t/p/w500";

    return (
      <div className="col-md-3 mb-5 movie-card">
        <div className="card">
          <img className="card-img-top" src={BASE_URL + this.props.posterUrl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <span className="d-flex justify-content-between">
              <span>
                <p><small>Year</small></p>
                <p><strong>{this.props.year.substring(0, 4)}</strong></p>
              </span>
              <span>
                <p><small>Rating</small></p>
                <p><strong>{this.props.rating}</strong></p>
              </span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
