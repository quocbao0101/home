import { GET_DATA_GA, GET_DATA_GA_ERROR } from './constants';

const getDataGA = () => ({
  type: GET_DATA_GA,
});
export const getDataGAError = (error) => ({
  type: GET_DATA_GA_ERROR,
  payload: error,
});

export default getDataGA;
