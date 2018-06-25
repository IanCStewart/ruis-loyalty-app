import { GET_NEWS, GET_NEWS_SUCCESS } from './types';
import sampleNews from '../defaults/news.json';

const getNewsSuccess = () => ({
  type: GET_NEWS_SUCCESS,
  payload: sampleNews.news
});

const getNews = () => ({
  type: GET_NEWS
});

export {
  getNews,
  getNewsSuccess
};
