import { all, call, put, takeLatest } from "redux-saga/effects";

import { requestArticles, requestArticlesSections, requestTopStories } from "../../services/api";
import { fetchingFinished, fetchingStart } from "../common/actions";
import { articlesReceivedAction, articlesSectionsReceivedAction, topStoriesReceivedAction } from "./actions";
import * as TYPE from "./actionTypes";

function* getArticles({ params }) {
	try {
		const { type, config } = params;
		yield put(fetchingStart());
		const res = yield call(requestArticles, type, config);
		yield put(articlesReceivedAction(res));
		yield put(fetchingFinished());
	} catch (e) {
		console.error(e);
		yield put(fetchingFinished());
	}
}

function* getTopStories({ params }) {
	try {
		const { type, config } = params;
		const res = yield call(requestTopStories, type, config);
		yield put(topStoriesReceivedAction(res));
	} catch (e) {
		console.error(e);
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
		takeLatest(TYPE.TOP_STORIES_FETCH, getTopStories),
		takeLatest(TYPE.ARTICLES_SECTIONS_FETCH, getArticlesSections),
	]);
}

export default articlesSaga;