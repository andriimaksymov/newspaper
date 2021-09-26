import * as TYPE from './actionTypes';

export const articlesSectionsFetchAction = params => ({ type: TYPE.ARTICLES_SECTIONS_FETCH, params });
export const articlesSectionsReceivedAction = data => ({ type: TYPE.ARTICLES_SECTIONS_RECEIVED, data });
export const articlesSectionsClearAction = () => ({ type: TYPE.ARTICLES_SECTIONS_CLEAR });

export const articlesFetchAction = params => ({ type: TYPE.ARTICLES_FETCH, params });
export const articlesReceivedAction = data => ({ type: TYPE.ARTICLES_RECEIVED, data });
export const articlesClearAction = () => ({ type: TYPE.ARTICLES_CLEAR });