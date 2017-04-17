import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchQueryChanged } from '../../actions';

class SearchBar extends Component {

  onSearchQueryChange(event) {
    console.log('event', event.target.value);
    this.props.searchQueryChanged(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Find healthy food"
          onChange={this.onSearchQueryChange.bind(this)}
          value={this.props.searchQuery}
        />
        <span>
          <button type="submit">Submit</button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state in mapStateToProps', state);
  const { searchQuery } = state.search;
  console.log('searchQuery', searchQuery);
  return { searchQuery };
};

export default connect(mapStateToProps, { searchQueryChanged })(SearchBar);
