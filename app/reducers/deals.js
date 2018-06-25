import { GET_DEALS, GET_DEALS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DEALS:
      return {
        ...state,
        loading: true
      };
    case GET_DEALS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false
      };
    default: return state;
  }
};
