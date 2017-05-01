import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchFilters } from '../../actions';


class SearchFilter extends Component {
  render() {
    const { 
      isOpen, 
      foodPantries, 
      communityGardens, 
      farmersMarkets,
      superMarkets } = this.props.filters;
    const { updateSearchFilters } = this.props;
    return (
      <div>
      <form>
        <label>
          Is open:
          <input
            name = "isOpen"
            type = "checkbox"
            checked = { isOpen }
            onChange = { updateSearchFilters }
          />
        </label>
        <label>
          Food Pantries:
          <input
            name = "foodPantries"
            type = "checkbox"
            checked = { foodPantries }
            onChange = { updateSearchFilters }
          />
        </label>
        <label>
          Community Gardens:
          <input
            name = "communityGardens"
            type = "checkbox"
            checked = { communityGardens }
            onChange = { updateSearchFilters }
          />
        </label>
        <label>
          Farmers Markets:
          <input
            name = "farmersMarkets"
            type = "checkbox"
            checked = { farmersMarkets }
            onChange = { updateSearchFilters }
          />
        </label>
        <label>
          Supermarkets:
          <input
            name = "superMarkets"
            type = "checkbox"
            checked = { superMarkets }
            onChange = { updateSearchFilters }
          />
        </label>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { filters : state.filters }; 
}

const mapDispatchToProps = dispatch => ({
  updateSearchFilters: (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    dispatch(updateSearchFilters({ prop : name, value : value }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFilter);
