import Grid from "@mui/material/Grid";

import Layout from "../components/layout";
import MostPopularArticles from "../components/MostPopularArticles";
import ArticlesSection from "../components/ArticlesSection";
import HomeMovieReviews from "../components/HomeMovieReviews";
import TopStories from "../components/TopStories";

export default function Home() {
  return (
    <Layout>
      <MostPopularArticles />

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <HomeMovieReviews />
        </Grid>
        <Grid item xs={12} md={4}>
          <TopStories />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ArticlesSection pagination={false} type="books" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ArticlesSection pagination={false} type="science" />
        </Grid>
      </Grid>
      s </Layout>
  );
}