import {
  NEWS_GA_RECEIVED,
  GET_DATA_GA,
} from './constants';

const initialState = {
  data: {
    acquisitionPipeChart: {
      social: 0,
      organic: 0,
      paid: 0,
      direct: 0,
      referral: 0,
    },
    performanceSources: [
    ],
    topPages: [
    ],
    products: [
    ],
    session: {
      Session: 0,
    },
    regionPipeChart: {
      Vietnam: 0,
    },
    totalTime: {
      TotalTime: 0,
    },
    totalVisitor: {
      TotalVisitor: 0,
    },
    newUser: {
      NewUsers: 0,
    },
    returningUser: {
      ReturningUsers: 0,
    },
    bounceRate: {
      BounceRate: 0,
    },
    rate: {
      ExitRate: 0,
    },
    viewSession: {
      ViewPerSession: 0,
    },
  },
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_GA:
      return { ...state, loading: true };
    case NEWS_GA_RECEIVED:
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};
export default reducer;
