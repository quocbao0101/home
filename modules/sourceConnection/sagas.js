import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import { OK } from 'constants';
import sourceConnection from 'services/sourceConnection';
import {
  DELETE_DATA_SOURCE_CONNECTION,
  DELETE_LIST_DATA_SOURCE_CONNECTION,
  GET_DATA_FILTER_SOURCE_CONNECTION_CONNECTOR,
  GET_DATA_FILTER_SOURCE_CONNECTION_STATUS,
  GET_DATA_SOURCE_CONNECTION,
  NEWS_SOURCE_CONNECTION_RECEIVED,
  GET_DATA_CHECK_CONNECTION_STATUS,
  GET_CHECK_CONNECTION_STATUS,
  DELETE_SINGLE_SOURCE_CONNECTION,
  DELETE_SINGLE_SOURCE_CONNECTION_COMPLETED,
} from './constants';
import { getDataSourceConnectionError } from './actions';

export function* fetchDataSourceConnection(value) {
  const [data, dataFilterConnector, dataFilterStatus] = yield all([
    call(sourceConnection.getDataSourceConnection, value.paginationData),
    call(sourceConnection.getDataFilterConnector),
    call(sourceConnection.getDataFilterStatus),
  ]);
  if (data && data.status === OK) {
    yield put({ type: NEWS_SOURCE_CONNECTION_RECEIVED, data: data.data });
  } else {
    yield put(getDataSourceConnectionError('Error...'));
  }

  if (dataFilterConnector && dataFilterConnector.status === OK) {
    yield put({
      type: GET_DATA_FILTER_SOURCE_CONNECTION_CONNECTOR,
      data: dataFilterConnector.data,
    });
  } else {
    yield put(getDataSourceConnectionError('Error...'));
  }

  if (dataFilterStatus && dataFilterStatus.status === OK) {
    yield put({ type: GET_DATA_FILTER_SOURCE_CONNECTION_STATUS, data: dataFilterStatus.data });
  } else {
    yield put(getDataSourceConnectionError('Error...'));
  }
}

export function* DeleteSourceConnection(payload) {
  const dataDelete = yield call(sourceConnection.getDataSourceConnectionDelete, payload.id);
  yield call(fetchDataSourceConnection, payload);
  if (dataDelete.status === OK) {
    yield put({ type: DELETE_LIST_DATA_SOURCE_CONNECTION, data: dataDelete.data });
  } else {
    yield put(getDataSourceConnectionError('Error...'));
  }
}

export function* getDataCheckConnectionStatus() {
  const paginationDataJS = {
    sortBy: 'ASC',
    page: 0,
    size: 1,
    sortField: '',
    filters: {
      name: '',
      connector: 'Javascript',
      status: '',
      ownedBy: '',
    },
  };
  const paginationDataGA = {
    sortBy: 'ASC',
    page: 0,
    size: 1,
    sortField: '',
    filters: {
      name: '',
      connector: 'Google Analytics',
      status: '',
      ownedBy: '',
    },
  };
  const paginationDataFB = {
    sortBy: 'ASC',
    page: 0,
    size: 1,
    sortField: '',
    filters: {
      name: '',
      connector: 'Facebook',
      status: '',
      ownedBy: '',
    },
  };
  const [javascriptStatus, gaStatus, fbStatus] = yield all([
    call(sourceConnection.getDataSourceConnection, paginationDataJS),
    call(sourceConnection.getDataSourceConnection, paginationDataGA),
    call(sourceConnection.getDataSourceConnection, paginationDataFB),
  ]);
  const connectionStatus = {
    jsItem: null,
    gaItem: null,
    fbItem: null,
    loading: false,
  };

  if (javascriptStatus && javascriptStatus.status === OK) {
    if (javascriptStatus.data.data.content.length > 0) {
      const firstItem = javascriptStatus.data.data.content[0];
      connectionStatus.jsItem = firstItem;
    }
  }

  if (gaStatus && gaStatus.status === OK) {
    if (gaStatus.data.data.content.length > 0) {
      const firstItem = gaStatus.data.data.content[0];
      connectionStatus.gaItem = firstItem;
    }
  }

  if (fbStatus && fbStatus.status === OK) {
    if (fbStatus.data.data.content.length > 0) {
      const firstItem = fbStatus.data.data.content[0];
      connectionStatus.fbItem = firstItem;
    }
  }

  yield put({ type: GET_CHECK_CONNECTION_STATUS, data: connectionStatus });
}

export function* DeleteSingleSourceConnection(payload) {
  const dataDelete = yield call(sourceConnection.getDataSourceConnectionDelete, payload.id);
  yield call(getDataCheckConnectionStatus);
  if (dataDelete.status === OK) {
    yield put({ type: DELETE_SINGLE_SOURCE_CONNECTION_COMPLETED });
  }
}

function* fetchNewsLatestActionWatcher() {
  yield takeLatest(GET_DATA_SOURCE_CONNECTION, fetchDataSourceConnection);
  yield takeLatest(GET_DATA_CHECK_CONNECTION_STATUS, getDataCheckConnectionStatus);
  yield takeLatest(DELETE_DATA_SOURCE_CONNECTION, DeleteSourceConnection);
  yield takeLatest(DELETE_DATA_SOURCE_CONNECTION, DeleteSourceConnection);
  yield takeLatest(DELETE_SINGLE_SOURCE_CONNECTION, DeleteSingleSourceConnection);
}

export default function* dashboardSaga() {
  yield all([
    fetchNewsLatestActionWatcher(),
  ]);
}
