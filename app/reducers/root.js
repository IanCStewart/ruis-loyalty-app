import { combineReducers } from 'redux';
import sampleDataReducer from './sample-data';
import eventsReducer from './events';
import newsReducer from './news';
import dealsReducer from './deals';

const rootReducer = combineReducers({
  sampleData: sampleDataReducer,
  events: eventsReducer,
  news: newsReducer,
  deals: dealsReducer
});

export default rootReducer;
