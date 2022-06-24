import {
  GET_DATA_FB, GET_DATA_FB_ERROR,
} from './constants';

const getDataFB = () => ({
  type: GET_DATA_FB,
});
export const getDataFBError = (error) => ({
  type: GET_DATA_FB_ERROR,
  payload: error,
});
export default getDataFB;
