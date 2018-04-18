import { DATA_AVAILABLE } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return [...state, action.payload];
    default: return state;
  }
};
