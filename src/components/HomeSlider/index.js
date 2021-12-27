import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/swiper-bundle.css';

import { mostPopularClearAction, mostPopularFetchAction } from "../../store/articles/actions";
import { getMostPopularWithMedia } from "../../store/articles/articleSlice";
import '../../styles/swiper.css';
import { useStyles } from './styles';
import SlideContent from "./SlideContent";

SwiperCore.use([Navigation, Pagination]);

export default function HomeSlider() {
    const classes = useStyles();
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const dispatch = useDispatch();
    const most_popular = useSelector(getMostPopularWithMedia);

    useEffect(() => {
        dispatch(mostPopularFetchAction());

        return () => {
            dispatch(mostPopularClearAction());
        }
    }, [dispatch]);

    return (
        <div className={classes.homeSliderContainer}>
            {
                most_popular ?
                    <Swiper
                        loop
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        pagination={{ clickable: true }}
                    >
                        {
                            most_popular.map(story =>
                                <SwiperSlide key={story.id}>
                                    <SlideContent
                                        key={story.id}
                                        media={story.media[0]}
                                        section={story.section}
                                        title={story.title}
                                        abstract={story.abstract}
                                        byline={story.byline}
                                        url={story.url}
                                        published_date={story.published_date}
                                    />
                                </SwiperSlide>,
                            )
                        }
                    </Swiper>
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
            <div className={classes.buttonWrap}>
                <IconButton className={clsx(classes.sliderButton, classes.sliderButtonPrev)} ref={navigationPrevRef}>
                    <ArrowBackIcon />
                </IconButton>
                <IconButton className={clsx(classes.sliderButton, classes.sliderButtonNext)} ref={navigationNextRef}>
                    <ArrowForwardIcon />
                </IconButton>
            </div>
        </div>
    );
}