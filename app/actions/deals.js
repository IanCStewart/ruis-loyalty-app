import { GET_DEALS, GET_DEALS_SUCCESS } from './types';
import sampleDeals from '../defaults/deals.json';

const getDealsSuccess = () => ({
  type: GET_DEALS_SUCCESS,
  payload: sampleDeals.deals
});

const getDeals = () => ({
  type: GET_DEALS
});

export {
  getDeals,
  getDealsSuccess
};
