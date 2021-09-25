import { all, call, put, takeLatest } from "redux-saga/effects";

import { requestArticles } from "../../services/api";
import { fetchingFinished, fetchingStart } from "../common/actions";
import { articlesReceivedAction } from "./actions";
import * as TYPE from "./actionTypes";

function* getArticles(params) {
	try {
		yield put(fetchingStart());
		const res = yield call(requestArticles, params);
		yield put(articlesReceivedAction(res));
		yield put(fetchingFinished());
	} catch (e) {
		console.error(e);
		yield put(fetchingFinished());
	}
}

function* articlesSaga() {
	yield all([
		takeLatest(TYPE.ARTICLES_FETCH, getArticles),
	]);
}

export default articlesSaga;