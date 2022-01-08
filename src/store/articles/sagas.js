import { all, call, takeEvery, put, takeLatest } from "redux-saga/effects";

import {
  requestArticles,
  requestArticlesSections,
  requestMostPopular, requestMoviesReview,
  requestSearch,
  requestTopStories,
} from "../../services/api";
import { fetchingFinished, fetchingStart } from "../common/actions";
import {
  articlesReceivedAction,
  articlesSectionsReceivedAction,
  mostPopularReceivedAction, movieReviewsReceivedAction, searchReceivedAction,
  topStoriesReceivedAction,
} from "./actions";
import * as TYPE from "./actionTypes";

function* getArticlesByType({ params }) {
  try {
    const { type, config } = params;
    yield put(fetchingStart());
    const res = yield call(requestArticles, type, config);
    yield put(articlesReceivedAction({ type, ...res }));
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
    const { config } = params;
    const res = yield call(requestArticlesSections, config);
    yield put(articlesSectionsReceivedAction(res));
  } catch (e) {
    console.error(e);
  }
}

function* getMostPopularArticles() {
  try {
    const res = yield call(requestMostPopular);
    yield put(mostPopularReceivedAction(res));
  } catch (e) {
    console.error(e);
  }
}

function* getSearchArticles({ params }) {
  try {
    const { config } = params;
    const res = yield call(requestSearch, config);
    yield put(searchReceivedAction(res.response));
  } catch (e) {
    console.error(e);
  }
}

function* getMoviesReviews({ params }) {
  try {
    const { type, config } = params;
    const res = yield call(requestMoviesReview, type, config);
    yield put(movieReviewsReceivedAction(res));
  } catch (e) {
    console.error(e);
  }
}

function* articlesSaga() {
  yield all([
    takeEvery(TYPE.ARTICLES_FETCH, getArticlesByType),
    takeLatest(TYPE.TOP_STORIES_FETCH, getTopStories),
    takeLatest(TYPE.ARTICLES_SECTIONS_FETCH, getArticlesSections),
    takeLatest(TYPE.MOST_POPULAR_FETCH, getMostPopularArticles),
    takeLatest(TYPE.SEARCH_ARTICLES_FETCH, getSearchArticles),
    takeLatest(TYPE.MOVIE_REVIEWS_FETCH, getMoviesReviews),
  ]);
}

export default articlesSaga;