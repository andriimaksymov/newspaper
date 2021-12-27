import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import routes from "../../utils/routes";
import Navigation from "./Navigation";
import Search from "../Search";

const useStyles = makeStyles({
  root: {
    padding: "30px 0",
  },
  logo: {
    fontSize: '2rem',
    textDecoration: 'none',
    color: 'inherit',
  },
});

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
            <Search />
          </Grid>
        </Grid>
        <Navigation />
      </Container>
      <Divider />
    </header>
  );
}