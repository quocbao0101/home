import {
  GET_DATA_GENERAL_INFORMATION, NEWS_AOV_RECEIVED,
  NEWS_CUS_BY_CHANNEL_RECEIVED, NEWS_GENERAL_INFORMATION_RECEIVED,
  NEWS_GROWTH_RATE_RECEIVED, NEWS_RATE_BY_REGION_RECEIVED,
} from './constants';

const initialState = {
  data: {
    totalCustomer: 0,
    totalTransaction: 0,
    totalProduct: 0,
    totalProfit: 0,
    totalRevenue: 0,
  },
  dataAOV: [
  ],
  dataGrowRate: [
  ],
  dataCusByChannel: {
    total: 0,
    totalOff: 0,
    totalOnline: 0,
  },
  dataRateByRegion: [
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_GENERAL_INFORMATION:
      return { ...state, loading: true };
    case NEWS_GENERAL_INFORMATION_RECEIVED:
      return { ...state, data: action.data, loading: false };
    case NEWS_AOV_RECEIVED:
      return { ...state, dataAOV: action.data, loading: false };
    case NEWS_GROWTH_RATE_RECEIVED:
      return { ...state, dataGrowRate: action.data, loading: false };
    case NEWS_CUS_BY_CHANNEL_RECEIVED:
      return { ...state, dataCusByChannel: action.data, loading: false };
    case NEWS_RATE_BY_REGION_RECEIVED:
      return { ...state, dataRateByRegion: action.data, loading: false };
    default:
      return state;
  }
};
export default reducer;
