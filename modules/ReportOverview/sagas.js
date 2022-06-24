import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import dataGAReportOverview from 'services/reportOverview';
import {
  NEWS_OVERVIEW_RECEIVED, GET_DATA_OVERVIEW,
  NEWS_OVERVIEW_FACEBOOK_RECEIVED, NEWS_OVERVIEW_INSTAGRAM_RECEIVED,
} from './constants';
import { getDataOverviewError } from './actions';

export function* fetchGAReport() {
  try {
    const [data, dataFB, dataIns] = yield all([
      call(dataGAReportOverview.getDataReportOverview),
      call(dataGAReportOverview.getDataReportOverviewFB),
      call(dataGAReportOverview.getDataReportOverviewIns)]);
    if (data && data.status === 'OK') {
      yield put({ type: NEWS_OVERVIEW_RECEIVED, data: data.data });
    } else {
      yield put(getDataOverviewError('Error...'));
    }
    if (data && data.status === 'OK') {
      yield put({ type: NEWS_OVERVIEW_FACEBOOK_RECEIVED, data: dataFB.data });
    } else {
      yield put(getDataOverviewError('Error...'));
    }
    if (data && data.status === 'OK') {
      yield put({ type: NEWS_OVERVIEW_INSTAGRAM_RECEIVED, data: dataIns.data });
    } else {
      yield put(getDataOverviewError('Error...'));
    }
  } catch (error) {
    yield put(getDataOverviewError(error));
  }
}

function* fetchNewsLatestActionWatcher() {
  yield takeLatest(GET_DATA_OVERVIEW, fetchGAReport);
}

export default function* reportGASaga() {
  yield all([fetchNewsLatestActionWatcher()]);
}
