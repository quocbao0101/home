import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import dashboardService from 'services/dashboard';
import { NEWS_RECEIVED } from './constants';

export function* fetchNews() {
  const data = yield call(dashboardService.getNews);
  yield put({ type: NEWS_RECEIVED, data: data.data });
}

function* fetchNewsLatestActionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
}

export default function* dashboardSaga() {
  yield all([
    fetchNewsLatestActionWatcher(),
  ]);
}
