import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/swiper-bundle.css';

import { mostPopularClearAction, mostPopularFetchAction } from "../../store/articles/actions";
import '../../styles/swiper.css';
import { useStyles } from './styles';

SwiperCore.use([Navigation, Pagination]);

export default function HomeSlider() {
	const classes = useStyles();
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	const dispatch = useDispatch();
	const { most_popular } = useSelector(({ articles }) => ({
		most_popular: articles.most_popular,
	}));

	useEffect(() => {
		dispatch(mostPopularFetchAction());

		return () => dispatch(mostPopularClearAction());
	}, [dispatch]);

	return (
		<div className={classes.homeSliderContainer}>
			{
				most_popular.list &&
				<Swiper
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
						most_popular.list.filter(story => story.media.length).map(story =>
							<SwiperSlide key={story.id}>
								<Grid container>
									<Grid item xs={6}>
										<div className={classes.imageWrap}>
											<img
												className={classes.image}
												src={story.media[0]?.["media-metadata"]?.[2]?.url}
												height={story.media[0]?.["media-metadata"]?.[2]?.height}
												width={story.media[0]?.["media-metadata"]?.[2]?.width}
												alt={story?.media[0]?.["caption"]} />
										</div>
									</Grid>
									<Grid item xs={6}>
										<div className={classes.slideContent}>
											<Typography gutterBottom component="span" className={classes.caption}>{story.section}</Typography>
											<Typography gutterBottom variant="h5" component="h2">{story.title}</Typography>
											<Typography gutterBottom variant="body2">{story.abstract} <a href={story.url} target="_blank">read
												more</a></Typography>
											<Box mt={2}>
												<Typography variant="body1">{story.byline}</Typography>
												<Typography variant="body2" component={Moment} format="MMM D">
													{story.published_date}
												</Typography>
											</Box>
										</div>
									</Grid>
								</Grid>
							</SwiperSlide>,
						)
					}
				</Swiper>
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
	)
}