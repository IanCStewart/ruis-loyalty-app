import { GET_EVENTS, GET_EVENTS_SUCCESS } from './types';
import sampleEvents from '../defaults/events.json';

const getEventsSuccess = () => ({
  type: GET_EVENTS_SUCCESS,
  payload: sampleEvents.events
});

const getEvents = () => ({
  type: GET_EVENTS
});

export {
  getEvents,
  getEventsSuccess
};
