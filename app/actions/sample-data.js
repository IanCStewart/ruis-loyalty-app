import { DATA_AVAILABLE } from './types';
import sampleData from '../instructions.json';

export const getData = () => ({
  type: DATA_AVAILABLE,
  payload: sampleData.data
});
