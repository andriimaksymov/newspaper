import { all, fork } from 'redux-saga/effects';

import articlesSaga from './articles/sagas';
import booksSaga from './books/sagas';

export function* rootSaga() {
  yield all([fork(articlesSaga)]);
  yield all([fork(booksSaga)]);
}
