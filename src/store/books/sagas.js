import { all, call, put, takeLatest } from 'redux-saga/effects';

import { requestBooks, requestBooksNames } from '../../services/api';
import { fetchBooksNamesReceived, fetchBooksReceived } from './actions';
import * as TYPE from './actionTypes';

function* fetchBooksSaga({ params }) {
  try {
    const { date, list, config } = params;
    const res = yield call(requestBooks, date, list, config);
    yield put(fetchBooksReceived(res));
  } catch (e) {
    console.error(e);
  }
}

function* fetchBooksNamesSaga({ params }) {
  try {
    const { config } = params;
    const res = yield call(requestBooksNames, config);
    yield put(fetchBooksNamesReceived(res));
  } catch (e) {
    console.error(e);
  }
}

function* booksSaga() {
  yield all([
    takeLatest(TYPE.BOOKS_REQUEST, fetchBooksSaga),
    takeLatest(TYPE.BOOKS_NAMES_REQUEST, fetchBooksNamesSaga),
  ]);
}

export default booksSaga;
