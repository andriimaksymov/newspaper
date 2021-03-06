import HttpService from './http';

export const requestMoviesReview = (type, config) => HttpService.get(`/movies/v2/reviews/${type}.json`, config);
export const requestArticlesSections = config => HttpService.get('/news/v3/content/section-list.json', config);
export const requestArticles = (type, config) => HttpService.get(`/news/v3/content/all/${type}.json`, config);
export const requestTopStories = (type, config) => HttpService.get(`/topstories/v2/${type}.json`, config);
export const requestMostPopular = config => HttpService.get('/mostpopular/v2/viewed/7.json', config);
export const requestSearch = config => HttpService.get('/search/v2/articlesearch.json', config);
export const requestBooks = (date, list, config) => HttpService.get(`/books/v3/lists/${date}/${list}.json`, config);
export const requestBooksNames = config => HttpService.get('/books/v3/lists/names.json', config);
