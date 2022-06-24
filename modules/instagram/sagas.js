import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import instagramService from 'services/instagram';
import { SET_INSTAGRAM_REPORT } from './constants';

function* workGetInstagramReportFetch() {
  const insReport = yield call(instagramService.getInstagramReport);
  yield put({ type: SET_INSTAGRAM_REPORT, payload: insReport.data });
}

export default function* instagramSaga() {
  yield all([
    takeLatest('GET_INSTAGRAM_REPORT', workGetInstagramReportFetch),
  ]);
}
