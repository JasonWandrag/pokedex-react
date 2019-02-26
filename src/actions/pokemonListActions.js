import {
  GET_POKEMON_LIST,
  GET_POKEMON_INFO,
  GET_NEXT,
  GET_PREV,
  SEARCH_POKEMON,
  POKEMON_ABILITIES,
  POKEMON_MOVES
} from './types';
import axios from 'axios';

export const getPokemonList = () => async dispatch => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
  dispatch({
    type: GET_POKEMON_LIST,
    payload: res.data
  });
};

export const getPokemonInfo = url => async dispatch => {
  const res = await axios.get(url);
  dispatch({
    type: GET_POKEMON_INFO,
    payload: res.data
  });
};

export const getNextPokemon = pokemonNext => async dispatch => {
  const res = await axios.get(pokemonNext);
  dispatch({
    type: GET_NEXT,
    payload: res.data
  });
};

export const getPreviousPokemon = pokemonPrev => async dispatch => {
  const res = await axios.get(pokemonPrev);
  dispatch({
    type: GET_PREV,
    payload: res.data
  });
};

export const searchPokemon = pokemonSearch => async dispatch => {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`
  );
  dispatch({
    type: SEARCH_POKEMON,
    payload: res.data
  });
};

export const pokeMoves = pokemonMoves => async dispatch => {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/moves/${pokemonMoves}`
  );
  dispatch({
    type: POKEMON_MOVES,
    payload: res.data
  });
};

export const pokeAbilities = pokemonAbilities => async dispatch => {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/abilities/${pokemonAbilities}`
  );
  dispatch({
    type: POKEMON_ABILITIES,
    payload: res.data
  });
};
