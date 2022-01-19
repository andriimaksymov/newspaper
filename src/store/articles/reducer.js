import * as TYPE from "./actionTypes";
import { setPagesCount } from "../../utils/common";

const defaultData = { list: null, count: 0 };

const initialState = {
  articles: defaultData,
  sections: defaultData,
  top_stories: defaultData,
  most_popular: defaultData,
  search: defaultData,
  movie_reviews: defaultData,
};

export default function articlesReducer(state = initialState, { type, data }) {
  switch (type) {
    case TYPE.ARTICLES_RECEIVED:
      return {
        ...state,
        articles: {
          ...state.articles,
          [data.type]: {
            ...state.articles[data.type],
            list: data.results,
            count: data.num_results,
            pages: setPagesCount(data.num_results),
          },
        },
      };
    case TYPE.ARTICLES_CLEAR:
      return {
        ...state,
        articles: defaultData,
      };
    case TYPE.ARTICLES_SECTIONS_RECEIVED:
      return {
        ...state,
        sections: {
          list: data?.results.filter(i => i.display_name !== 'Admin'),
          count: data.num_results,
          pages: setPagesCount(data.num_results),
        },
      };
    case TYPE.ARTICLES_SECTIONS_CLEAR:
      return {
        ...state,
        sections: {
          list: null,
        },
      };
    case TYPE.TOP_STORIES_RECEIVED:
      return {
        ...state,
        top_stories: {
          list: data.results,
          count: data.num_results,
          pages: setPagesCount(data.num_results),
        },
      };
    case TYPE.TOP_STORIES_CLEAR:
      return {
        ...state,
        top_stories: defaultData,
      };
    case TYPE.MOST_POPULAR_RECEIVED:
      return {
        ...state,
        most_popular: {
          list: data.results,
          count: data.num_results,
          pages: setPagesCount(data.num_results),
        },
      };
    case TYPE.MOST_POPULAR_CLEAR:
      return {
        ...state,
        most_popular: defaultData,
      };
    case TYPE.SEARCH_ARTICLES_RECEIVED:
      return {
        ...state,
        search: {
          list: data.docs,
          count: data.meta.hits,
          pages: setPagesCount(data.meta.hits),
        },
      };
    case TYPE.SEARCH_ARTICLES_CLEAR:
      return {
        ...state,
        search: defaultData,
      };
    case TYPE.MOVIE_REVIEWS_RECEIVED:
      return {
        ...state,
        movie_reviews: {
          list: data.results,
          count: data.num_results,
        },
      };
    case TYPE.MOVIE_REVIEWS_CLEAR:
      return {
        ...state,
        movie_reviews: defaultData,
      };
    default:
      return state;
  }
}