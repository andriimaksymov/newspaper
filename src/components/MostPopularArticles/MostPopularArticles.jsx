import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/swiper-bundle.css';
import { mostPopularClearAction, mostPopularFetchAction, movieReviewsFetchAction } from '../../store/articles/actions';
import { getMostPopularWithMedia } from '../../store/articles/articleSlice';
import { ButtonsWrap, PrevButton, NextButton, StyledSwiper, Wrapper } from './styles';
import MostPopularArticlesItem from './MostPopularArticlesItem';
import MostPopularArticleSkeleton from './MostPopularArticleSkeleton';

SwiperCore.use([Navigation, Pagination]);

export default function MostPopularArticles() {
  const dispatch = useDispatch();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const most_popular = useSelector(getMostPopularWithMedia);

  useEffect(() => {
    dispatch(mostPopularFetchAction());
    dispatch(movieReviewsFetchAction({ type: 'all' }));

    return () => {
      dispatch(mostPopularClearAction());
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {
        most_popular ?
          <StyledSwiper
            loop
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            pagination={{ clickable: true }}
          >
            {
              most_popular.map(story =>
                <SwiperSlide key={story.id}>
                  <MostPopularArticlesItem
                    key={story.id}
                    id={story.id}
                    media={story.media[0]}
                    section={story.section}
                    title={story.title}
                    abstract={story.abstract}
                    byline={story.byline}
                    url={story.url}
                    nytdsection={story.nytdsection}
                    published_date={story.published_date}
                  />
                </SwiperSlide>,
              )
            }
          </StyledSwiper>
          : <MostPopularArticleSkeleton />
      }
      <ButtonsWrap>
        <PrevButton ref={navigationPrevRef}>
          <ArrowBackIcon />
        </PrevButton>
        <NextButton ref={navigationNextRef}>
          <ArrowForwardIcon />
        </NextButton>
      </ButtonsWrap>
    </Wrapper>
  );
}
