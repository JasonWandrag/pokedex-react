import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import pokemonListReducer from './pokemonListReducer';

export default combineReducers({
    pokemon: pokemonReducer,
    pokemonList: pokemonListReducer
});