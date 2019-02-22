import React, { Component } from 'react'
import Home from './Home';
import Information from './Information';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemonInfo } from '../actions/pokemonListActions';

class Display extends Component {

  render() {
    return (
      <div className="displayArea">
        {!this.props.pokemonInfo.length ? <Home />: <Information pokemonInfo={this.props.pokemonInfo[0]} />}
      </div>
    )
  }
}

Display.propTypes = {
  info: PropTypes.object,
  getPokemonInfo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  pokemonInfo: state.pokemonList.info
});

export default connect(mapStateToProps, { getPokemonInfo })(Display);
