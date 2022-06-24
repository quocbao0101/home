import {
  FETCH_USERS_ASYNC,
  FETCH_USERS_SUCCESS,
} from './constants';

const initialState = {
  users: [],
  selectedUser: null,
  sortField: '',
  filters: {
    id: null,
    username: '',
    email: '',
    name: '',
    status: '',
    role: '',
  },
  sortBy: 'ASC',
  errorMsg: '',
  totalElements: 0,
  totalPages: 0,
  fetching: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_ASYNC:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: payload.data.content,
        totalElements: payload.data.totalElements,
        totalPages: payload.data.totalPages,
      };

      // case DELETE_USERS_ERROR:
      // case ADD_USERS_ERROR:
      // case FETCH_USERS_ERROR:
      // case GET_USERS_ERROR:
      // case UPDATE_USERS_ERROR:
      // case ON_ACTIVE_ERROR:
      //   return { ...state, errorMsg: payload };

      // case GET_USERS:
      // case ADD_USERS:
      // case ADD_USERS_SUCCESS:
      // case UPDATE_USERS:
      // case UPDATE_USERS_SUCCESS:
      //   return { ...state };

      // case GET_USER_BY_ID_ASYNC:
      //   return { ...state, fetching: true };
      // case GET_USER_BY_ID_SUCCESS:
      //   return { ...state, selectedUser: payload };

    // case DELETE_ID_SUCCESS:
    //   return { ...state, users: state.users.filter((user) => user.id !== payload) };
    // case ON_ACTIVE_SUCCESS:
    //   return { ...state, users: state.users };
    // case GET_USERS_SUCCESS:
    //   return { ...state, users: state.users.find((user) => user.id === payload) };
    // case DELETE_USERS_SUCCESS:
    //   return { ...state, users: state.users.filter((user) => !payload.includes(user.id)) };
    // case FILTER_SEARCH:
    //   return { ...state, filters: { ...state.filters, name: payload } };
    default:
      return state;
  }
};
export default reducer;
