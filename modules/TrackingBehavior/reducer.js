import {
  GET_DATA_TRACKING_BEHAVIOR,
  NEWS_TRACKING_BEHAVIOR_RECEIVED,
} from './constants';

const initialState = {
  data: {
    purchaseClick: {
      PurchaseClick: 0,
    },
    cancelRate: {
      CancelRate: 0,
    },
    totalvisited: {
      TotalVisitedOnSite: 0,
    },
    timeOnSite: {
      TimeOnSite: 0,
    },
    campaign: {
      ClickCampaign: 0,
    },
    visitorProducts: [],
    eventStatistics: {
      pageView: 0,
      addToCart: 0,
      checkout: 0,
      productView: 0,
      firstPurchase: 0,
    },
    addToCarts: {
      totalOrder: 0,
      completedSuccessfully: 0,
      cancel: 0,
    },
  },
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_TRACKING_BEHAVIOR:
      return { ...state, loading: true };
    case NEWS_TRACKING_BEHAVIOR_RECEIVED:
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};
export default reducer;
