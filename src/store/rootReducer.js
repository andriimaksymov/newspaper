import { combineReducers } from 'redux';

import articlesReducer from './articles/reducer';
import booksReducer from './books/reducer';
import commonReducer from './common/reducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  books: booksReducer,
  common: commonReducer,
});

export default rootReducer;
