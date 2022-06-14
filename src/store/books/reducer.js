import * as TYPE from './actionTypes';

const initialState = {
  books: {
    list: [],
    total: 0,
  },
  names: {
    list: [],
    total: 0,
  },
};

export default function articlesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TYPE.BOOKS_REQUEST:
      return {
        ...state,
        books: {
          list: [],
          total: 0,
        },
      };
    case TYPE.BOOKS_RECEIVED:
      return {
        ...state,
        books: {
          list: payload.results.books,
          total: payload.num_results,
        },
      };
    case TYPE.BOOKS_NAMES_RECEIVED:
      return {
        ...state,
        names: {
          list: payload.results,
          total: payload.num_results,
        },
      };
    default:
      return state;
  }
}
