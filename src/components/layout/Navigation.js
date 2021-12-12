import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import routes from "../../utils/routes";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { navigationSectionsList } from "../../store/articles/articleSlice";

const useStyles = makeStyles({
    nav: {
        margin: '2rem -1rem 0',
        padding: '.5rem 0',
    },
    link: {
        fontSize: '.8rem',
        letterSpacing: '.05rem',
        textDecoration: 'none',
        textTransform: 'uppercase',
        padding: '0.5rem 1rem',
        color: 'inherit',
    },
    loader: {
        display: 'inline-block !important',
        width: 120,
    },
});

export default function Navigation() {
    const classes = useStyles();
    const section_list = useSelector(navigationSectionsList);

    return (
        <nav className={classes.nav}>
            {
                section_list
                    ? <>
                        <Link className={classes.link} to={routes.home}>Home</Link>
                        <Link className={classes.link} to={routes.articles("all")}>All</Link>
                        {section_list.map(item =>
                            <Link key={item.section} className={classes.link} to={routes.articles(item.section)}>
                                {item.display_name}
                            </Link>,
                        )}
                        <IconButton component={Link} to={routes.categories}>
                            <MoreHorizIcon />
                        </IconButton>
                    </>
                    : <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <Skeleton height="20" />
                        </Grid>
                        <Grid item xs={2}>
                            <Skeleton height="20" />
                        </Grid>
                        <Grid item xs={2}>
                            <Skeleton height="20" />
                        </Grid>
                    </Grid>
            }
        </nav>
    );
}