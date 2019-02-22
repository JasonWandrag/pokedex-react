import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemonList, getPokemonInfo, getNextPokemon, getPreviousPokemon } from '../actions/pokemonListActions';

class Itemlist extends Component {
 
  clickedOn = (url) =>  {
    console.log(url); 
    this.props.getPokemonInfo(url);
  }

  componentDidMount() {
    this.props.getPokemonList();
  }

  nextButton = (pokemonNext) => {
    console.log(pokemonNext);
    this.props.getNextPokemon(pokemonNext);
  }

  prevButton = (pokemonPrev) => {
    console.log(pokemonPrev);
    this.props.getPreviousPokemon(pokemonPrev);
  }

  render() {
    console.log(this.props);
    
    const { pokemonList } = this.props;
    return (
      <div className="sidebar">
      {pokemonList ? (
        <React.Fragment>
          <h4>There are {this.props.pokemonCount} pokemon!</h4>
          <ul>
              {pokemonList.map((result,i) => (
                <div  key = {i} onClick={this.clickedOn.bind(this, result.url)}>
                  <Item 
                    name={result.name}
                    url = {result.url}
                  />
                </div>
              ))}
          </ul>
          {this.props.pokemonPrev ? <p onClick={this.prevButton.bind(this, this.props.pokemonPrev)} >Previous</p> : null}
          {this.props.pokemonNext ? <p onClick={this.nextButton.bind(this, this.props.pokemonNext)} >Next</p> : null}
        </React.Fragment>
      ):<h1>Loading</h1>}
      </div>
    )
  }
}

Itemlist.propTypes = {
  pokemonList: PropTypes.array,
  getPokemonList: PropTypes.func.isRequired,
  getPokemonInfo: PropTypes.func.isRequired,
  getNextPokemon: PropTypes.func.isRequired,
  getPreviousPokemon: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  pokemonList: state.pokemonList.results.results,
  pokemonCount: state.pokemonList.results.count,
  pokemonNext: state.pokemonList.results.next,
  pokemonPrev: state.pokemonList.results.previous,
});

export default connect(mapStateToProps, { getPokemonList, getPokemonInfo, getNextPokemon, getPreviousPokemon })(Itemlist);
