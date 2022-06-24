import {
  GET_INSTAGRAM_REPORT,
  SET_INSTAGRAM_REPORT,
} from './constants';

const initialState = {
  data: {
    impressions_day: 0,
    follower: 0,
    follower_count_day: 0,
    reach_day: 0,
    like: 0,
    comment: 0,
    website_clicks_day: 0,
    email_contacts_day: 0,
    get_directions_clicks_day: 0,
    phone_call_clicks_day: 0,
    F: 0,
    M: 0,
    U: 0,
    a_13_17: 0,
    a_18_24: 0,
    other: 0,
  },
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTAGRAM_REPORT:
      return { ...state, loading: true };
    case SET_INSTAGRAM_REPORT:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
};

export default reducer;
