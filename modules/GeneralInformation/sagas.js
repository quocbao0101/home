import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import { OK } from 'constants';
import dataGeneralInformation from 'services/generalInformation';
import {
  GET_DATA_GENERAL_INFORMATION,
  NEWS_AOV_RECEIVED, NEWS_CUS_BY_CHANNEL_RECEIVED,
  NEWS_GENERAL_INFORMATION_RECEIVED, NEWS_GROWTH_RATE_RECEIVED,
  NEWS_RATE_BY_REGION_RECEIVED,
} from './constants';
import { getGeneralInformationError } from './action';

export function* fetchGAReport(value) {
  const [dataReportOverview, dataAOV, dataRate, dataCusByChannel, dataRateByRegion] = yield all(
    [call(
      dataGeneralInformation.getDataGeneralInformation, value.date,
    ),
    call(dataGeneralInformation.getDataGIAOV, value.date),
    call(dataGeneralInformation.getDataGIRate, value.date),
    call(dataGeneralInformation.getGICusByChannel, value.date),
    call(dataGeneralInformation.getDataGIRateByRegion, value.date),
    ],
  );
  if (dataReportOverview && dataReportOverview.status === OK) {
    yield put({ type: NEWS_GENERAL_INFORMATION_RECEIVED, data: dataReportOverview.data.data });
  } else {
    yield put(getGeneralInformationError('Error...'));
  }
  if (dataAOV && dataAOV.status === OK) {
    yield put({ type: NEWS_AOV_RECEIVED, data: dataAOV.data.data });
  } else {
    yield put(getGeneralInformationError('Error...'));
  }
  if (dataRate && dataRate.status === OK) {
    yield put({ type: NEWS_GROWTH_RATE_RECEIVED, data: dataRate.data.data });
  } else {
    yield put(getGeneralInformationError('Error...'));
  }
  if (dataCusByChannel && dataCusByChannel.status === OK) {
    yield put({ type: NEWS_CUS_BY_CHANNEL_RECEIVED, data: dataCusByChannel.data.data });
  } else {
    yield put(getGeneralInformationError('Error...'));
  }
  if (dataRateByRegion && dataRateByRegion.status === OK) {
    yield put({ type: NEWS_RATE_BY_REGION_RECEIVED, data: dataRateByRegion.data.data });
  } else {
    yield put(getGeneralInformationError('Error...'));
  }
}

function* fetchNewsLatestActionWatcher() {
  yield takeLatest(GET_DATA_GENERAL_INFORMATION, fetchGAReport);
}

export default function* reportGASaga() {
  yield all([fetchNewsLatestActionWatcher()]);
}
