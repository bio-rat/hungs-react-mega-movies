import React, { Component } from 'react'

export default class SearchMovies extends Component {
  render() {
    return (
      <form className="mt-3">
        <h5 className="mt-3">Search</h5>
        <div className="form-group">
          <input onChange={this.props.onSearch} type="text" className="form-control" id="searchInput" placeholder="Enter movie's name" />
        </div>
      </form>
    )
  }
}
