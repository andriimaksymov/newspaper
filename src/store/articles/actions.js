import * as TYPE from './actionTypes';

export const articlesFetchAction = params => ({ type: TYPE.ARTICLES_FETCH, params });
export const articlesReceivedAction = data => ({ type: TYPE.ARTICLES_RECEIVED, data });
export const articlesClearAction = () => ({ type: TYPE.ARTICLES_CLEAR });