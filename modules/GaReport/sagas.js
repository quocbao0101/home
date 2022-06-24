import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import dataGAReport from 'services/gaReport';
import { NEWS_GA_RECEIVED, GET_DATA_GA } from './constants';
import { getDataGAError } from './action';

export function* fetchGAReport() {
  try {
    const data = yield call(dataGAReport.getDataGA);
    if (data && data.status === 'OK') {
      yield put({ type: NEWS_GA_RECEIVED, data: data.data });
    } else {
      yield put(getDataGAError('Error...'));
    }
  } catch (error) {
    yield put(getDataGAError(error));
  }
}

function* fetchNewsLatestActionWatcher() {
  yield takeLatest(GET_DATA_GA, fetchGAReport);
}

export default function* reportGASaga() {
  yield all([fetchNewsLatestActionWatcher()]);
}
