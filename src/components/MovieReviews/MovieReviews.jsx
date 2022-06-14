import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieReviewsClearAction, movieReviewsFetchAction } from '../../store/articles/actions';
import { getHomeMovieReviews } from '../../store/articles/articleSlice';
import { ReviewsList, ReviewsWrapper } from './styles';
import MovieReviewsItem from './MovieReviewsItem';
import MovieReviewsSkeleton from './MovieReviewsSkeleton';
import Title from '../Title';

const MovieReviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(getHomeMovieReviews);

  useEffect(() => {
    dispatch(movieReviewsFetchAction({ type: 'all' }));

    return () => {
      dispatch(movieReviewsClearAction());
    };

    // eslint-disable-next-line
  }, []);

  return (
    <ReviewsWrapper>
      <Title title="Movie Reviews" />
      <ReviewsList>

        {
          reviews
            ? reviews.map((review, i) => (
              <MovieReviewsItem
                size={i === 0 ? 'large' : null}
                url={review.link.url}
                date={review.publication_date}
                key={review.display_title}
                description={review.summary_short}
                image={review.multimedia.src}
                title={review.headline}
              />
            ))
            : <>
              <MovieReviewsSkeleton size="large" />
              <MovieReviewsSkeleton />
              <MovieReviewsSkeleton />
              <MovieReviewsSkeleton />
            </>
        }
      </ReviewsList>
    </ReviewsWrapper>
  );
};

export default MovieReviews;
