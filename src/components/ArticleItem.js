import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	articleItem: {
		'& + $articleItem': {
			marginTop: 20
		}
	},
	imageWrap: {
		position: 'relative',
		width: 190,
		overflow: 'hidden',
		'&::after': {
			content: "''",
			display: 'block',
			paddingBottom: '56.25%',
		},
		'& img': {
			position: 'absolute',
			top: 0,
			left: 0,
		}
	}
});

export default function ArticleItem({ title, description, image }) {
	const classes = useStyles();
	
	return (
		<div className={classes.articleItem}>
			<Grid container spacing={3}>
				<Grid item xs={8} md>
					<Typography variant="h6" gutterBottom>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</Grid>
				<Grid item xs={4} md="auto">
					<div className={classes.imageWrap}>
						<img src={image} alt={title} />
					</div>
				</Grid>
			</Grid>
		</div>
	)
}