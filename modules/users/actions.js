import {
  FETCH_USERS_ASYNC,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  // FILTER_SEARCH,
  // DELETE_USERS_ERROR,
  // DELETE_USERS_SUCCESS,
  // ADD_USERS_ERROR,
  // ADD_USERS_SUCCESS,
  // ADD_USERS,
  // GET_USERS,
  // GET_USERS_ERROR,
  // GET_USERS_SUCCESS,
  // ON_ACTIVE,
  // ON_ACTIVE_ERROR,
  // ON_ACTIVE_SUCCESS,
  // UPDATE_USERS,
  // UPDATE_USERS_ERROR,
  // UPDATE_USERS_SUCCESS,
  // DELETE_ID_ERROR,
  // DELETE_ID_SUCCESS,
  // GET_USER_BY_ID_ASYNC,
  // GET_USER_BY_ID_SUCCESS,
} from './constants';

export const fetchAllUserAsync = (userData) => ({ type: FETCH_USERS_ASYNC, userData });

export const fetchAllUserSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchAllUserError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});

// export const addUsers = (userData) => ({
//   type: ADD_USERS,
//   payload: userData,
// });

// export const addUserSuccess = () => ({
//   type: ADD_USERS_SUCCESS,
// });

// export const addUserError = (error) => ({
//   type: ADD_USERS_ERROR,
//   payload: error,
// });

// export const deleteUser = (id) => ({
//   type: DELETE_USERS_SUCCESS,
//   payload: id,
// });

// export const deleteUserSuccess = () => ({
//   type: DELETE_USERS_SUCCESS,
// });

// export const deleteUserError = (error) => ({
//   type: DELETE_USERS_ERROR,
//   payload: error,
// });

// export const getUser = (id) => ({
//   type: GET_USERS,
//   payload: id,
// });

// export const getUserSuccess = () => ({
//   type: GET_USERS_SUCCESS,
// });

// export const getUserError = (error) => ({
//   type: GET_USERS_ERROR,
//   payload: error,
// });

// export const searchFilter = (searchText) => ({
//   type: FILTER_SEARCH,
//   payload: searchText,
// });

// export const onActive = (id) => ({
//   type: ON_ACTIVE,
//   payload: id,
// });

// export const onActiveSuccess = () => ({
//   type: ON_ACTIVE_SUCCESS,
// });

// export const onActiveError = (error) => ({
//   type: ON_ACTIVE_ERROR,
//   payload: error,
// });

// export const UpdateUser = (id, userData) => ({
//   type: UPDATE_USERS,
//   payload: id,
//   userData,
// });

// export const UpdateUserSuccess = () => ({
//   type: UPDATE_USERS_SUCCESS,
// });

// export const UpdateUserError = (error) => ({
//   type: UPDATE_USERS_ERROR,
//   payload: error,
// });

// export const deleteId = (id) => ({
//   type: DELETE_ID_SUCCESS,
//   payload: id,
// });

// export const deleteIdSuccess = () => ({
//   type: DELETE_ID_SUCCESS,
// });

// export const deleteIdError = (error) => ({
//   type: DELETE_ID_ERROR,
//   payload: error,
// });

// export const getUserByIdAsync = (id) => ({
//   type: GET_USER_BY_ID_ASYNC,
//   payload: id,
// });

// export const getUserByIdSucess = (user) => ({
//   type: GET_USER_BY_ID_SUCCESS,
//   payload: user,
// });
