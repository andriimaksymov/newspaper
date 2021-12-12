import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { categoriesData } from "../utils/data";
import routes from "../utils/routes";
import Layout from "../components/layout";
import { Card } from "@mui/material";

const useStyles = makeStyles(theme => ({
    categoryWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'inherit',
        textDecoration: 'none',
        padding: 20,
        height: '100%',
        borderRadius: 30,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    categoryIcon: {
        fontSize: 30,
        marginBottom: 10,
        '& .MuiSvgIcon-root': {
            fontSize: 'inherit',
        },
    },
}));

export default function Categories() {
    const classes = useStyles();
    const section = useSelector(state => state.articles.sections);

    return (
        <Layout>
            <Grid container spacing={4}>
                {
                    section.list && section.list.map(item =>
                        <Grid key={item.section} item xs={6} sm={3} md={4}>
                            <Card elevation={5} component={Link} className={classes.categoryWrap}
                                  to={routes.articles(item.section)}>
                                <div className={classes.categoryIcon}>
                                    {categoriesData[item.display_name]?.icon}
                                </div>
                                <Typography variant="h5">{item.display_name}</Typography>
                            </Card>
                        </Grid>,
                    )
                }
            </Grid>
        </Layout>
    );
}