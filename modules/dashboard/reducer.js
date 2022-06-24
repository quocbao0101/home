import {
  NEWS_RECEIVED,
  GET_NEWS,
} from './constants';

const initialState = {
  news: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case NEWS_RECEIVED:
      return { ...state, news: action.data, loading: false };
    default:
      return state;
  }
};
export default reducer;
