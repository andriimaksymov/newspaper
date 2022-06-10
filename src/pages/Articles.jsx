import Grid from '@mui/material/Grid';
import Layout from '../components/layout';
import TopStories from '../components/TopStories/TopStories';
import ArticlesSection from '../components/ArticlesSection';

export default function Articles({ match }) {
  const type = match.params.slug_name;

  return (
    <Layout>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <ArticlesSection type={type} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TopStories />
        </Grid>
      </Grid>
    </Layout>
  );
}
