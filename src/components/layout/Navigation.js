import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";

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
});

export default function Navigation() {
    const classes = useStyles();
    const [nav, setNav] = useState([]);
    const section_list = useSelector(state => state.articles.sections.list);
    useEffect(() => {
        const list = cloneDeep(section_list)?.slice(0, 7);
        setNav(list);
    }, [section_list]);

    return (
        <nav className={classes.nav}>
            <Link className={classes.link} to={routes.home}>Home</Link>
            <Link className={classes.link} to={routes.articles("all")}>All</Link>
            {
                nav?.map(item =>
                    <Link key={item.section} className={classes.link} to={routes.articles(item.section)}>
                        {item.display_name}
                    </Link>,
                )
            }
        </nav>
    );
}