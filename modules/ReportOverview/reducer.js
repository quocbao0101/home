import {
  GET_DATA_OVERVIEW,
  NEWS_OVERVIEW_FACEBOOK_RECEIVED,
  NEWS_OVERVIEW_INSTAGRAM_RECEIVED,
  NEWS_OVERVIEW_RECEIVED,
} from './constants';

const initialState = {
  data: {
    session: {
      Session: 0,
    },
    totalVisitor: {
      TotalVisitor: 0,
    },
    newUser: {
      NewUsers: 0,
    },
  },
  dataFB: {
    ads_account_insight: {
      impressions: 0,
      spend: 0,
      ctr: 0,
      clicks: 0,
    },
  },
  dataIns: {
    id: 0,
    instaInfoMap: {
      impressions_day: 0,
      reach_day: 0,
      follower: 0,
    },
  },
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_OVERVIEW:
      return { ...state, loading: true };
    case NEWS_OVERVIEW_RECEIVED:
      return { ...state, data: action.data, loading: false };
    case NEWS_OVERVIEW_FACEBOOK_RECEIVED:
      return { ...state, dataFB: action.data, loading: false };
    case NEWS_OVERVIEW_INSTAGRAM_RECEIVED:
      return { ...state, dataIns: action.data, loading: false };
    default:
      return state;
  }
};
export default reducer;
