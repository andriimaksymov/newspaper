import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/swiper-bundle.css';
import { mostPopularClearAction, mostPopularFetchAction, movieReviewsFetchAction } from '../../store/articles/actions';
import { getMostPopularWithMedia } from '../../store/articles/articleSlice';
import { ButtonsWrap, PrevButton, NextButton, StyledSwiper, Wrapper } from './styles';
import Item from './Item';

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
  }, [dispatch]);

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
              most_popular.map((story) =>
                <SwiperSlide key={story.id}>
                  <Item
                    key={story.id}
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
          : <Grid container spacing={2}>
            <Grid xs={6} item>
              <Skeleton variant="rectangular" height={360} />
            </Grid>
            <Grid xs={6} item>
              <Stack spacing={2}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" height={70} />
              </Stack>
            </Grid>
          </Grid>
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
