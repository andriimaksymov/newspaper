import HttpService from './http';

export const requestArticlesSections = config => HttpService.get('/news/v3/content/section-list.json', config);
export const requestArticles = (type, config) => HttpService.get(`/news/v3/content/all/${type}.json`, config);
export const requestTopStories = (type, config) => HttpService.get(`/topstories/v2/${type}.json`, config);