import {
  put, takeLatest, call, all,
} from 'redux-saga/effects';
import usersService from 'services/usersService';
import {
  fetchAllUserAsync, fetchAllUserError,
} from './actions';
import { OK } from '../../constants';
import { FETCH_USERS_SUCCESS } from './constants';

export function* fetchAllUsers(value) {
  const response = yield all([
    call(usersService.getallUsers, value.paginationData),
  ]);
  if (response && response.status === OK) {
    yield put({ type: FETCH_USERS_SUCCESS, data: response.data });
  } else {
    yield put(fetchAllUserError('Error...'));
  }
}

// export function* onCreateUser({ payload }) {
//   try {
//     const response = yield call(usersService.adduser, payload);
//     if (response && response.status === OK) {
//       yield put(addUserSuccess(response.data));
//     } else {
//       yield put(addUserError('Error...'));
//     }
//   } catch (error) {
//     yield put(addUserError(error));
//   }
// }
// function* onGetUserById({ payload }) {
//   try {
//     const response = yield call(usersService.getuser, payload);
//     if (response && response.status === OK) {
//       yield put(getUserByIdSucess(response.data));
//     } else {
//       yield put(getUserError('Error...'));
//     }
//   } catch (error) {
//     yield put(getUserError(error));
//   }
// }

// export function* onDeleteUser({ payload }) {
//   try {
//     const response = yield call(usersService.deleteuser, payload);
//     if (response && response.status === OK) {
//       yield put(deleteUserSuccess(response.data));
//     } else {
//       yield put(deleteUserError('Error...'));
//     }
//   } catch (error) {
//     yield put(deleteUserError(error));
//   }
// }

// export function* onDeleteId({ payload }) {
//   try {
//     const response = yield call(usersService.deleteuser, payload);
//     if (response && response.status === OK) {
//       yield put(deleteIdSuccess(response.data));
//     } else {
//       yield put(deleteIdError('Error...'));
//     }
//   } catch (error) {
//     yield put(deleteIdError(error));
//   }
// }

// export function* onUpdateUser({ payload: id, userData }) {
//   try {
//     const response = yield call(usersService.updateuser, id, userData);
//     if (response && response.status === OK) {
//       yield put(UpdateUserSuccess(response.data));
//     } else {
//       yield put(UpdateUserError('Error...'));
//     }
//   } catch (error) {
//     yield put(UpdateUserError(error));
//   }
// }

export function* userSaga() {
  yield takeLatest(fetchAllUserAsync().type, fetchAllUsers);
  // yield takeLatest(addUsers().type, onCreateUser);
  // yield takeLatest(getUser().type, onGetUserById);
  // yield takeLatest(deleteUser().type, onDeleteUser);
  // yield takeLatest(UpdateUser().type, onUpdateUser);
  // yield takeLatest(deleteId().type, onDeleteId);
  // yield takeLatest(getUserByIdAsync().type, onGetUserById);
}
