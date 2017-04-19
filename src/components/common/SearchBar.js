import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search, updateSearchInput } from '../../actions';


class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={this.props.search}>
        <input
          placeholder="Find healthy food"
          onChange={this.props.updateSearchInput}
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
  return { searchQuery: state.searchQuery };
};

const mapDispatchToProps = dispatch => ({
  updateSearchInput: (e) => {
    dispatch(updateSearchInput(e.target.value));
  },
  search: (e) => {
    e.preventDefault();
    dispatch(search());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
