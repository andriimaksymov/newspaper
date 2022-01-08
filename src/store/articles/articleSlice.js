import { createSelector } from 'reselect';

export const navigationSectionsList = createSelector(
  state => state.articles.sections.list,
  sections => sections?.slice(0, 7));

export const getMostPopularWithMedia = createSelector(
  state => state.articles.most_popular.list,
  most_popular => most_popular?.filter(story => story.media.length).slice(0, 8),
);

export const getHomeMovieReviews = createSelector(
  state => state.articles.movie_reviews.list,
  movie_reviews => movie_reviews?.slice(0, 4),
);

export const getTopStories = (count = 10) => createSelector(
  state => state.articles.top_stories.list,
  top_stories => top_stories?.slice(0, count),
);