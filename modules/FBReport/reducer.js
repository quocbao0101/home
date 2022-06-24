import {
  NEWS_FB_RECEIVED, GET_DATA_FB, NEWS_FB_PAGE_RECEIVED, NEWS_FB_TOP_PAGE_RECEIVED,
} from './constants';

const initialState = {
  datafbADS: {
    ads_account_insight: {
      impressions: 0,
      spend: 0,
      ctr: 0,
      cpc: 0,
      reach: 0,
      clicks: 0,
    },
    ads_performance: [
    ],
    campaign_performance: [
    ],
  },
  datafbPage: {
    data_fan_page: [
    ],
    data_fan_page_complementary: [
    ],
  },
  datafbTopPage: {
    top_page: [
    ],
  },
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FB:
      return { ...state, loading: true };
    case NEWS_FB_RECEIVED:
      return { ...state, datafbADS: action.data, loading: false };
    case NEWS_FB_PAGE_RECEIVED:
      return { ...state, datafbPage: action.data, loading: false };
    case NEWS_FB_TOP_PAGE_RECEIVED:
      return { ...state, datafbTopPage: action.data, loading: false };
    default:
      return state;
  }
};
export default reducer;
