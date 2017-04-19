import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchFilter extends Component {
  render() {
    return (
      <div>
      <form>
        <label>
          Is open:
          <input
            name="isOpen"
            type="checkbox"
            // checked={this.props.filters.isOpen}
            // onChange={this.handleInputChange}
          />
        </label>
        <label>
          Food Pantries:
          <input
            name="foodPantries"
            type="checkbox"
            // checked={this.props.filters.foodPantries}
            // onChange={this.handleInputChange}
          />
        </label>
        <label>
          Community Gardens:
          <input
            name="communityGardens"
            type="checkbox"
            // checked={this.props.filters.communityGardens}
            // onChange={this.handleInputChange}
          />
        </label>
        <label>
          Farmers Markets:
          <input
            name="farmersMarkets"
            type="checkbox"
            // checked={this.props.filters.farmersMarkets}
            // onChange={this.handleInputChange}
          />
        </label>
        <label>
          Supermarkets:
          <input
            name="superMarkets"
            type="checkbox"
            // checked={this.props.filters.superMarkets}
            // onChange={this.handleInputChange}
          />
        </label>
        </form>
      </div>
    );
  }
};

export default SearchFilter;
