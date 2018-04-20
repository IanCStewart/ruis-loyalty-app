import { DATA_AVAILABLE, DATA_AVAILABLE_SUCCESS } from './types';
import sampleData from '../instructions.json';

const getDataSuccess = () => ({
  type: DATA_AVAILABLE_SUCCESS,
  payload: sampleData.instructions
})

const getData = () => ({
  type: DATA_AVAILABLE
});

export {
  getData,
  getDataSuccess
}
