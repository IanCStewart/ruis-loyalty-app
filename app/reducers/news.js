import { GET_NEWS, GET_NEWS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        loading: true
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false
      };
    default: return state;
  }
};
