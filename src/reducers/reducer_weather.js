import FETCH_WEATHER from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //es6 syntax, concat the array in the current state, goes at the top
  }
  return state;
}
