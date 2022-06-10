import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import routes from '../../utils/routes';
import Search from '../Search';

const useStyles = makeStyles({
  root: {
    padding: '30px 0',
  },
  logo: {
    fontSize: '2rem',
    lineHeight: 1.75,
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
      </Container>
    </header>
  );
}
