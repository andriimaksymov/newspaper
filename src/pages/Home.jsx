import Grid from "@mui/material/Grid";

import Layout from "../components/layout";
import MostPopularArticles from "../components/MostPopularArticles";
import ArticlesSection from "../components/ArticlesSection";

export default function Home() {
    return (
        <Layout>
            <MostPopularArticles />
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <ArticlesSection pagination={false} type="books" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ArticlesSection pagination={false} type="science" />
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}