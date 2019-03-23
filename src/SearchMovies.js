import React, { Component } from 'react'

export default class SearchMovies extends Component {
  render() {
    return (
      <form className="mt-3">
        <h5 className="mt-3">Search</h5>
        <div className="form-group">
          <input onChange={this.props.onSearch} type="text" className="form-control" id="searchInput" placeholder="Enter movie's name" />
          {/* <small id="help" className="form-text text-muted">Any movies you can think of. We'll find it for ya.</small> */}
        </div>
      </form>
    )
  }
}
