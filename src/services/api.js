import HttpService from './http';

export const requestArticles = config => HttpService.get('/news/v3/content/all/all.json', config);
export const requestBooks = config => HttpService.get('/books/v3/lists/current/e-book-fiction.json', config);