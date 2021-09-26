import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';

import { articlesClearAction, articlesFetchAction } from "../store/articles/actions";
import { useQuery } from "../utils/hooks";
import Layout from "../components/layout";
import PageHeader from "../components/PageHeader";
import ArticleItem from "../components/ArticleItem";
import Pagination from "../components/Pagination";

export default function Articles() {
	const dispatch = useDispatch();
	const { articles } = useSelector(({ articles }) => ({
		articles: articles.articles.list,
	}));
	
	const query = useQuery();
	const location = useLocation();
	const config = { ...(query.get("page") && { offset: query.get("page") }) };
	
	useEffect(() => {
		dispatch(articlesFetchAction(config));
		
		return () => dispatch(articlesClearAction());
	}, [dispatch, location]);
	
	console.log(articles)
	
	return (
		<Layout>
			<PageHeader title="Articles" />
			<Grid container spacing={3}>
				<Grid item xs={12} md={9}>
					{
						articles && articles.map((article, key) =>
							<ArticleItem
								key={key}
								title={article.title}
								description={article.abstract}
								image={article.multimedia?.[3]?.url}
							/>
						)
					}
					<Pagination />
				</Grid>
				<Grid item xs={12} md={3}>
					<aside>
						aside
					</aside>
				</Grid>
			</Grid>
		</Layout>
	)
}