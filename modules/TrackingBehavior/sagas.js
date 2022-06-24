import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import dataTrackingBehavior from 'services/trackingBehavior';
import {
  GET_DATA_TRACKING_BEHAVIOR, NEWS_TRACKING_BEHAVIOR_RECEIVED,
} from './constants';
import { getTrackingBehaviorError } from './actions';

export function* fetchTrakingBehavior() {
  try {
    const data = yield call(dataTrackingBehavior.getDataTrackingBehavior);
    if (data && data.status === 'OK') {
      yield put({ type: NEWS_TRACKING_BEHAVIOR_RECEIVED, data: data.data });
    } else {
      yield put(getTrackingBehaviorError('Error...'));
    }
  } catch (error) {
    yield put(getTrackingBehaviorError(error));
  }
}

function* fetchNewsLatestActionWatcher() {
  yield takeLatest(GET_DATA_TRACKING_BEHAVIOR, fetchTrakingBehavior);
}

export default function* trackingBehaviorSaga() {
  yield all([fetchNewsLatestActionWatcher()]);
}
