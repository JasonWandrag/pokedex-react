import { GET_POKEMON_LIST, GET_POKEMON_INFO, GET_NEXT, GET_PREV } from './types';
import axios from 'axios';

export const getPokemonList = () => async dispatch => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    dispatch ({
        type: GET_POKEMON_LIST,
        payload: res.data
    });
};

export const getPokemonInfo = (url) => async dispatch => {
    const res = await axios.get(url);
    dispatch ({
        type: GET_POKEMON_INFO,
        payload: res.data
    });
};

export const getNextPokemon = (pokemonNext) => async dispatch => {
    const res = await axios.get(pokemonNext);
    dispatch ({
        type: GET_NEXT,
        payload: res.data
    });
}

export const getPreviousPokemon = (pokemonPrev) => async dispatch => {
    const res = await axios.get(pokemonPrev);
    dispatch ({
        type: GET_PREV,
        payload: res.data
    });
}