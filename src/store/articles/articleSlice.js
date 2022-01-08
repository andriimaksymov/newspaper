import { createSelector } from 'reselect';

export const navigationSectionsList = createSelector(
  state => state.articles.sections.list,
  sections => sections?.slice(0, 7));

export const getMostPopularWithMedia = createSelector(
  state => state.articles.most_popular,
  most_popular => most_popular?.list?.filter(story => story.media.length).slice(0, 8),
);

export const getHomeMovieReviews = createSelector(
  state => state.articles.movie_reviews,
  movie_reviews => movie_reviews?.list?.slice(0, 4),
);