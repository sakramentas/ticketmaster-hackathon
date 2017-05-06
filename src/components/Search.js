import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log('value', e.target.value)
  }

  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search here" />
      </div>
    );
  }
}

export default Search







