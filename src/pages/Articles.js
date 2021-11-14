import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';

import {
	articlesClearAction,
	articlesFetchAction,
	topStoriesClearAction,
	topStoriesFetchAction
} from "../store/articles/actions";
import { useDeepEqualMemo, useQuery } from "../utils/hooks";
import routes from "../utils/routes";
import Layout from "../components/layout";
import PageHeader from "../components/PageHeader";
import Pagination from "../components/Pagination";
import TopStories from "../components/TopStories";
import ArticleList from "../components/ArticleList";

export default function Articles({ match }) {
	const type = match.params.slug_name;
	const dispatch = useDispatch();
	const { articles, top_stories } = useSelector(({ articles }) => ({
		articles: articles.articles,
		top_stories: articles.top_stories,
	}));
	const title = type.charAt(0).toUpperCase() + type.slice(1);
	const [count, setCount] = useState(0);
	const query = useQuery();
	const location = useLocation();
	const config = useDeepEqualMemo({ ...(query.get("page") && { offset: query.get("page") }) });

	useEffect(() => {
		dispatch(articlesFetchAction({ type, config }));
		dispatch(topStoriesFetchAction({ type: "home" }));

		return () => {
			dispatch(articlesClearAction());
			dispatch(topStoriesClearAction());
		}
	}, [dispatch, type, config, location]);

	useEffect(() => setCount(Math.round(articles.count / 20)), [articles.count]);

	return (
		<Layout>
			<Grid container spacing={5}>
				<Grid item xs={12} md={8}>
					<PageHeader title={title} />
					<ArticleList
						list={articles.list}
					/>
					<Pagination
						count={count}
						pathname={routes.articles(type)}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TopStories list={top_stories} />
				</Grid>
			</Grid>
		</Layout>
	)
}