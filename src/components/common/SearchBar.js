import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchQueryChanged,
  fetchStarted,
  fetchFinished } from '../../actions';

class SearchBar extends Component {

  onSearchQueryChange(event) {
    this.props.searchQueryChanged(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchStarted();
    const { searchQuery } = this.props;
    //request info to backend

    //reset searchQuery prop to ''
    this.props.fetchFinished();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
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
  const { searchQuery } = state.search;
  console.log('searchQuery', searchQuery);
  return { searchQuery };
};

export default connect(mapStateToProps, {
  searchQueryChanged,
  fetchStarted,
  fetchFinished })(SearchBar);
