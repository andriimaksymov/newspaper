import * as TYPE from './actionTypes';

export const fetchBooksRequest = params => ({ type: TYPE.BOOKS_REQUEST, params });
export const fetchBooksReceived = payload => ({ type: TYPE.BOOKS_RECEIVED, payload });

export const fetchBooksNamesRequest = params => ({ type: TYPE.BOOKS_NAMES_REQUEST, params });
export const fetchBooksNamesReceived = payload => ({ type: TYPE.BOOKS_NAMES_RECEIVED, payload });
