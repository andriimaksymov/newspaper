import { all, call, put, takeLatest } from "redux-saga/effects";

import { requestArticles, requestArticlesSections } from "../../services/api";
import { fetchingFinished, fetchingStart } from "../common/actions";
import { articlesReceivedAction, articlesSectionsReceivedAction } from "./actions";
import * as TYPE from "./actionTypes";

function* getArticles({ params }) {
	try {
		yield put(fetchingStart());
		const res = yield call(requestArticles, { params });
		yield put(articlesReceivedAction(res));
		yield put(fetchingFinished());
	} catch (e) {
		console.error(e);
		yield put(fetchingFinished());
	}
}

function* getArticlesSections(params) {
	try {
		const res = yield call(requestArticlesSections, params);
		yield put(articlesSectionsReceivedAction(res));
		yield put(fetchingFinished());
	} catch (e) {
		console.error(e);
	}
}

function* articlesSaga() {
	yield all([
		takeLatest(TYPE.ARTICLES_FETCH, getArticles),
		takeLatest(TYPE.ARTICLES_SECTIONS_FETCH, getArticlesSections),
	]);
}

export default articlesSaga;