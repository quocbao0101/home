import {
  DELETE_DATA_SOURCE_CONNECTION,
  GET_DATA_SOURCE_CONNECTION,
  GET_DATA_SOURCE_CONNECTION_ERROR,
  GET_DATA_CHECK_CONNECTION_STATUS,
  DELETE_SINGLE_SOURCE_CONNECTION,
} from './constants';

const getDataSourceConnection = (paginationData) => ({
  type: GET_DATA_SOURCE_CONNECTION,
  paginationData,
});
export const getDataSourceConnectionError = (error) => ({
  type: GET_DATA_SOURCE_CONNECTION_ERROR,
  payload: error,
});
export const deleteSourceConnection = (id, paginationData) => ({
  type: DELETE_DATA_SOURCE_CONNECTION,
  id,
  paginationData,
});
export const getDataCheckConnectionStatus = () => ({
  type: GET_DATA_CHECK_CONNECTION_STATUS,
});
export const deleteSingleSourceConnection = (id) => ({
  type: DELETE_SINGLE_SOURCE_CONNECTION,
  id,
});

export default getDataSourceConnection;
