import Grid from "@mui/material/Grid";

import Layout from "../components/layout";
import HomeSlider from "../components/HomeSlider";
import ArticlesSection from "../components/ArticlesSection";

export default function Home() {
    return (
        <Layout>
            <HomeSlider />
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <ArticlesSection type="books" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ArticlesSection type="science" />
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}