import { GET_DATA_OVERVIEW, GET_DATA_OVERVIEW_ERROR } from './constants';

const getDataOverview = () => ({
  type: GET_DATA_OVERVIEW,
});
export const getDataOverviewError = (error) => ({
  type: GET_DATA_OVERVIEW_ERROR,
  payload: error,
});

export default getDataOverview;
