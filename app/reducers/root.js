import { combineReducers } from 'redux';
import sampleDataReducer from './sample-data';
import eventsReducer from './events';
import newsReducer from './news';

const rootReducer = combineReducers({
  sampleData: sampleDataReducer,
  events: eventsReducer,
  news: newsReducer
});

export default rootReducer;
