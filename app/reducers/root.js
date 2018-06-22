import { combineReducers } from 'redux';
import sampleDataReducer from './sample-data';
import eventsReducer from './events';

const rootReducer = combineReducers({
  sampleData: sampleDataReducer,
  events: eventsReducer
});

export default rootReducer;
