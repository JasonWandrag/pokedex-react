import {
  GET_POKEMON_LIST,
  GET_POKEMON_INFO,
  GET_NEXT,
  GET_PREV,
  SEARCH_POKEMON
} from '../actions/types';

const initialState = {
  results: [],
  info: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_LIST:
      return {
        ...state,
        results: action.payload
      };
    case GET_POKEMON_INFO:
      return {
        ...state,
        info: [action.payload]
      };
    case GET_NEXT:
      return {
        ...state,
        results: action.payload
      };
    case GET_PREV:
      return {
        ...state,
        results: action.payload
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        info: [action.payload]
      };
    default:
      return state;
  }
}
