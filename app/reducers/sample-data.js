import { DATA_AVAILABLE, DATA_AVAILABLE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return {
        ...state,
        loading: true
      };
    case DATA_AVAILABLE_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false
      };
    default: return state;
  }
};
