import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Layout from '../components/layout';
import routes from '../utils/routes';
import MostPopularArticles from '../components/MostPopularArticles';
import ArticlesSection from '../components/ArticlesSection';
import MovieReviews from '../components/MovieReviews';
import TopStories from '../components/TopStories';

export default function Home() {
  return (
    <Layout>
      <MostPopularArticles />

      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <MovieReviews />
        </Grid>
        <Grid item xs={12} md={4}>
          <TopStories count={3} />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ArticlesSection pagination={false} type="books" />
          <Typography color="primary" component={Link} to={routes.books}>
            <Stack direction="row" alignItems="center">
              <Box mr={1} pt={.2}>SEE ALL BOOKS</Box>
              <ArrowForwardIosIcon fontSize="inherit" />
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ArticlesSection pagination={false} type="science" />
        </Grid>
      </Grid>
    </Layout>
  );
}
