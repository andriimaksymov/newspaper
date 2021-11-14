import * as TYPE from './actionTypes';

export const articlesSectionsFetchAction = params => ({ type: TYPE.ARTICLES_SECTIONS_FETCH, params });
export const articlesSectionsReceivedAction = data => ({ type: TYPE.ARTICLES_SECTIONS_RECEIVED, data });
export const articlesSectionsClearAction = () => ({ type: TYPE.ARTICLES_SECTIONS_CLEAR });

export const articlesFetchAction = params => ({ type: TYPE.ARTICLES_FETCH, params });
export const articlesReceivedAction = data => ({ type: TYPE.ARTICLES_RECEIVED, data });
export const articlesClearAction = () => ({ type: TYPE.ARTICLES_CLEAR });

export const topStoriesFetchAction = params => ({ type: TYPE.TOP_STORIES_FETCH, params });
export const topStoriesReceivedAction = data => ({ type: TYPE.TOP_STORIES_RECEIVED, data });
export const topStoriesClearAction = () => ({ type: TYPE.TOP_STORIES_CLEAR });

export const mostPopularFetchAction = params => ({ type: TYPE.MOST_POPULAR_FETCH, params });
export const mostPopularReceivedAction = data => ({ type: TYPE.MOST_POPULAR_RECEIVED, data });
export const mostPopularClearAction = () => ({ type: TYPE.MOST_POPULAR_CLEAR });