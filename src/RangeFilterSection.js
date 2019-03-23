import React, { Component } from 'react'
import InputRange from 'react-input-range';

export default class RangeFilterSection extends Component {
  render() {
    return (
      <form className="form">
        <h5 className="mb-4">Year</h5>

        <InputRange draggableTrack maxValue={this.props.orYear.orMax} minValue={this.props.orYear.orMin} onChange={this.props.onFilterYear} value={this.props.filterYear} />

        <h5 className="mt-5 mb-4">Rating</h5>

        <InputRange draggableTrack maxValue={this.props.orRating.orMax} minValue={this.props.orRating.orMin} onChange={this.props.onFilterRating} value={this.props.filterRating} />
      </form>
    )
  }
}
