import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pokeAbilities, pokeMoves } from '../actions/pokemonListActions';

class Information extends Component {
  constructor(props) {
    super(props);

    this.state = { value: true };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value === 'true') {
      this.setState({ value: true });
    } else {
      this.setState({ value: false });
    }
  }

  getAbility = url => {
    this.props.pokeAbilities(url);
  };

  render() {
    return (
      <div className='infoView'>
        <div className='pokeTitle'>
          <div className='pokeID'># {this.props.pokemonInfo.id}</div>
          <h1 className='pokeName'>
            {this.props.pokemonInfo.name.toUpperCase()}
          </h1>
        </div>

        <div className='d-flex'>
          <div className='d-inline'>
            <div className='pokeImageFlip'>
              <img
                className='imgFront'
                src={this.props.pokemonInfo.sprites.front_default}
                alt='front'
              />
              <img
                className='imgBack'
                src={this.props.pokemonInfo.sprites.back_default}
                alt='back'
              />
            </div>
          </div>

          <div className='d-inline'>
            <div className='container'>
              <h3>Stats</h3>
              <div className='d-flex'>
                {this.props.pokemonInfo.stats.map((s, i) => (
                  <p key={i} className='d-inline'>
                    <b>{s.stat.name}</b> : {s.base_stat}
                  </p>
                ))}
              </div>
            </div>

            <div className='container'>
              <h3>Basic Information</h3>
              <p className='d-inline'>
                <b>Weight:</b> {this.props.pokemonInfo.weight / 10}kg
              </p>
              <p className='d-inline'>
                <b>Height:</b> {this.props.pokemonInfo.height / 10}m
              </p>
            </div>

            <div className='container'>
              <h3>Types</h3>
              {this.props.pokemonInfo.types.map((t, i) => (
                <p key={i} className='capitalize d-inline'>
                  {t.type.name}
                </p>
              ))}
            </div>

            <div className='container'>
              <h3>
                Abilities{' '}
                <small className='hiddenAbility'>
                  Items with this color background indicate its hidden ability
                </small>{' '}
              </h3>
              <select
                onChange={this.handleChange}
                className={this.state.value ? 'hiddenAbility' : null}>
                {this.props.pokemonInfo.abilities.map((v, i) => (
                  <option value={v.is_hidden} key={i}>
                    {v.ability.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='container'>
              <h3>Moves</h3>
              <select>
                {this.props.pokemonInfo.moves.map((m, i) => (
                  <option key={i}>{m.move.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Information.propTypes = {
  pokeAbilities: PropTypes.func,
  pokeMoves: PropTypes.func
};

const mapStateToProps = state => ({
  moves: state.pokemonList.moves,
  abilities: state.pokemonList.abilities
});

export default connect(
  mapStateToProps,
  { pokeAbilities, pokeMoves }
)(Information);
