import { createSelector } from 'reselect';

export const getBooksSelector = createSelector(
  state => state.books.books.list,
  list => list,
);

export const getBooksNamesSelector = createSelector(
  state => state.books.names.list,
  list => list,
);
