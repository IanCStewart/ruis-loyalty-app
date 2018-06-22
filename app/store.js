import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root';

const enhancer = composeWithDevTools(applyMiddleware(reduxThunk));

const store = createStore(
  rootReducer,
  enhancer
);

export default store;
