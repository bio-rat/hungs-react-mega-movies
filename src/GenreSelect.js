import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';

export default class GenreSelect extends Component {
  render() {
    return (
      <FormGroup>
        <h5>Genre</h5>
        <Input type="select" onChange={this.props.onSelectGenre}>
          <option value=''>All</option>
          {this.props.genresList.map(x => <option key={x.id} value={x.id}>{x.name}</option> )}  
        </Input>
      </FormGroup>
    )
  }
}
