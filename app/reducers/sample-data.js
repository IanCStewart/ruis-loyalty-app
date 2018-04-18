import { DATA_AVAILABLE } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return { ...state, data: [ ...state.data, ...action.payload ] };
    default: return state;
  }
};
