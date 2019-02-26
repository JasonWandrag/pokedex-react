import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchPokemon } from '../actions/pokemonListActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.searchPokemon(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Search...'
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

Search.propTypes = {
  pokemonSearch: PropTypes.array,
  searchPokemon: PropTypes.func
};

const mapStateToProps = state => ({
  searchPokemon: state.searchPokemon
});

export default connect(
  mapStateToProps,
  { searchPokemon }
)(Search);
