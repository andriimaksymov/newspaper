import { memo } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Moment from "react-moment";

const useStyles = makeStyles({
	stickyAside: {
		position: 'sticky',
		top: 0,
		display: 'flex',
		flexDirection: 'column',
		maxHeight: '100vh',
	},
	header: {
		marginBottom: '30px !important',
	},
	asideList: {
		overflow: 'auto',
		flexGrow: 1,
		paddingRight: 10,
	},
	topStory: {
		marginBottom: 25,
	},
	number: {
		flex: '0 0 50px',
		fontSize: 30,
		lineHeight: 1.25,
		minWidth: 40,
		color: '#ccc',
	},
});

const TopStories = ({ list }) => {
	console.log('top stories', list);
	const classes = useStyles();

	return (
		<aside className={classes.stickyAside}>
			<Typography variant="h6" className={classes.header} component="h4">Popular Posts</Typography>
			<div className={classes.asideList}>
				{
					list && list.list?.map((story, key) =>
						<Grid container spacing={1} className={classes.topStory} key={story.url}>
							<Grid item xs="auto">
								<div className={classes.number}>
									{`${key < 9 ? '0' : ''}${key + 1}`}
								</div>
							</Grid>
							<Grid item xs>
								<Typography gutterBottom variant="h6" component="h4">{story.title}</Typography>
								<Grid container spacing={1}>
									<Grid item xs={8}>
										<Typography variant="body1">{story.byline}</Typography>
									</Grid>
									<Grid item xs={4}>
										<Typography variant="body2" component={Moment} format="MMM D">
											{story.published_date}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>,
					)
				}
			</div>
		</aside>
	)
};

export default memo(TopStories)