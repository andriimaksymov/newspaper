import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";

import routes from "../../utils/routes";
import Navigation from "./Navigation";

const useStyles = makeStyles(theme => ({
	root: {
		padding: "30px 0"
	},
	logo: {
		fontSize: '2rem',
		textDecoration: 'none',
		color: 'inherit',
		'&:hover': {
			color: theme.palette.primary.main
		}
	}
}));

export default function Header() {
	const classes = useStyles();
	
	return (
		<header className={classes.root}>
			<Container>
				<Grid container justifyContent="space-between">
					<Grid item>
						<Link to={routes.home} className={classes.logo}>NewsPaper</Link>
					</Grid>
					<Grid item>
						Some content
					</Grid>
				</Grid>
				<Navigation />
			</Container>
			<Divider />
		</header>
	)
}