import { GET_DEALS, GET_DEALS_SUCCESS } from './types';
import sampleNews from '../defaults/news.json';

const getDealsSuccess = () => ({
  type: GET_DEALS_SUCCESS,
  payload: sampleNews.news
});

const getDeals = () => ({
  type: GET_DEALS
});

export {
  getDeals,
  getDealsSuccess
};
