import { combineReducers } from 'redux';
import sampleDataReducer from './sample-data';

const rootReducer = combineReducers({
  sampleData: sampleDataReducer
});

export default rootReducer;
