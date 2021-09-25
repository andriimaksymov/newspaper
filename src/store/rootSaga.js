import { all, fork } from "redux-saga/effects";

import articlesSaga from "./articles/sagas";

export function* rootSaga() {
	yield all([fork(articlesSaga)]);
}