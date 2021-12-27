import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { categoriesData } from "../utils/data";
import routes from "../utils/routes";
import Layout from "../components/layout";

const useStyles = makeStyles({
  categoryWrap: {
    display: 'block',
    color: 'inherit',
    textAlign: 'center',
    textDecoration: 'none',
    padding: 20,
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#f3f3f3',
    '&:hover': {
      color: 'hsl(90, 50%, 53%)',
      boxShadow: '0 5px 5px rgba(0, 0, 0, .1)',
    },
  },
  categoryIcon: {
    marginBottom: 20,
  },
});

export default function Categories() {
  const classes = useStyles();
  const section = useSelector(state => state.articles.sections);

  return (
    <Layout>
      <Grid container spacing={4}>
        {
          section.list && section.list.map(item =>
            <Grid key={item.section} item xs={6} sm={4} md={3}>
              <Link className={classes.categoryWrap} to={routes.articles(item.section)}>
                <div className={classes.categoryIcon}>
                  {categoriesData[item.display_name]?.icon}
                </div>
                <Typography variant="h5">{item.display_name}</Typography>
              </Link>
            </Grid>,
          )
        }
      </Grid>
    </Layout>
  );
}