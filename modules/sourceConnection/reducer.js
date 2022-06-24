import {
  DELETE_DATA_SOURCE_CONNECTION,
  DELETE_LIST_DATA_SOURCE_CONNECTION,
  GET_DATA_FILTER_SOURCE_CONNECTION_CONNECTOR,
  GET_DATA_FILTER_SOURCE_CONNECTION_STATUS,
  GET_DATA_SOURCE_CONNECTION,
  NEWS_SOURCE_CONNECTION_RECEIVED,
  GET_CHECK_CONNECTION_STATUS,
  DELETE_SINGLE_SOURCE_CONNECTION,
} from './constants';

const initialState = {
  data: [
  ],
  totalElements: 0,
  totalPages: 0,
  loading: false,
  filterConnector: [
  ],
  filterStatus: [
  ],
  connectionStatus: {
    jsItem: null,
    gaItem: null,
    fbItem: null,
    loading: true,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SOURCE_CONNECTION:
      return { ...state, loading: true };
    case NEWS_SOURCE_CONNECTION_RECEIVED:
      return {
        ...state,
        data: action.data.data.content,
        totalElements: action.data.data.totalElements,
        totalPages: action.data.data.totalPages,
        loading: false,
      };
    case GET_DATA_FILTER_SOURCE_CONNECTION_CONNECTOR:
      return { ...state, filterConnector: action.data.data };
    case GET_DATA_FILTER_SOURCE_CONNECTION_STATUS:
      return { ...state, filterStatus: action.data.data };
    case DELETE_DATA_SOURCE_CONNECTION:
      return { ...state, loading: true };
    case DELETE_LIST_DATA_SOURCE_CONNECTION:
      return state;
    case GET_CHECK_CONNECTION_STATUS:
      return { ...state, connectionStatus: action.data };
    case DELETE_SINGLE_SOURCE_CONNECTION:
      return { ...state, connectionStatus: { ...state.connectionStatus, loading: true } };
    default:
      return state;
  }
};
export default reducer;
