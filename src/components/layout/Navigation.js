import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	nav: {
		margin: '2rem -1rem 0',
		padding: '.5rem 0'
	},
	link: {
		fontSize: '.8rem',
		letterSpacing: '.05rem',
		textDecoration: 'none',
		textTransform: 'uppercase',
		padding: '0.5rem 1rem',
	}
});

export default function Navigation() {
	const classes = useStyles();
	return (
		<nav className={classes.nav}>
			<Link className={classes.link} to={routes.home}>Home</Link>
			<Link className={classes.link} to={routes.articles("all")}>Articles</Link>
		</nav>
	)
}