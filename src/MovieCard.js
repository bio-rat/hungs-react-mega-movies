import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const BASE_URL = "https://image.tmdb.org/t/p/w500";

    return (
      <div className="col-md-4 my-5">
        <div className="card movie-card">
          <img className="card-img-top" src={BASE_URL + this.props.posterUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <span className="d-flex justify-content-md-between">
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
