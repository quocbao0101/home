import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import dataFBReport from 'services/fbReport';
import {
  NEWS_FB_RECEIVED, GET_DATA_FB, NEWS_FB_TOP_PAGE_RECEIVED, NEWS_FB_PAGE_RECEIVED,
} from './constants';
import { getDataFBError } from './actions';

export function* fetchFBReport() {
  try {
    const [dataFbAds, dataFbpage, dataFbToPage] = yield all([call(dataFBReport.getDataFBADS),
      call(dataFBReport.getDataFBPage),
      call(dataFBReport.getDataFBTopPage)]);
    if (dataFbAds && dataFbAds.status === 'OK') {
      yield put({ type: NEWS_FB_RECEIVED, data: dataFbAds.data });
    } else {
      yield put(getDataFBError('Error...'));
    }

    if (dataFbpage && dataFbpage.status === 'OK') {
      yield put({ type: NEWS_FB_PAGE_RECEIVED, data: dataFbpage.data });
    } else {
      yield put(getDataFBError('Error...'));
    }
    if (dataFbToPage && dataFbToPage.status === 'OK') {
      yield put({ type: NEWS_FB_TOP_PAGE_RECEIVED, data: dataFbToPage.data });
    } else {
      yield put(getDataFBError('Error...'));
    }
  } catch (error) {
    yield put(getDataFBError(error));
  }
}

function* fetchNewsLatestActionWatcher() {
  yield takeLatest(GET_DATA_FB, fetchFBReport);
}

export default function* reportFBSaga() {
  yield all([fetchNewsLatestActionWatcher()]);
}
