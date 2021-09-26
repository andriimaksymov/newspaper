import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';

import { articlesClearAction, articlesFetchAction } from "../store/articles/actions";
import { useDeepEqualMemo, useQuery } from "../utils/hooks";
import Layout from "../components/layout";
import PageHeader from "../components/PageHeader";
import ArticleItem from "../components/ArticleItem";
import Pagination from "../components/Pagination";
import ArticleItemSkeleton from "../components/ArticleItemSkeleton";

export default function Articles({match}) {
	const type = match.params.slug_name;
	const title = type.charAt(0).toUpperCase() + type.slice(1);
	const query = useQuery();
	const location = useLocation();
	const dispatch = useDispatch();
	const { articles } = useSelector(({ articles }) => ({
		articles: articles.articles,
	}));
	const [count, setCount] = useState(0);
	const config = useDeepEqualMemo({ ...(query.get("page") && { offset: query.get("page") }) });
	
	useEffect(() => {
		dispatch(articlesFetchAction({ type, config }));
		
		return () => dispatch(articlesClearAction());
	}, [dispatch, type, config, location]);
	useEffect(() => setCount(Math.round(articles.count / 20)), [articles.count]);
	
	return (
		<Layout>
			<PageHeader title={title} />
			<Grid container spacing={3}>
				<Grid item xs={12} md={9}>
					{
						articles.list
							? articles.list.map((article, key) =>
								<ArticleItem
									key={key}
									title={article.title}
									section={article.section}
									description={article.abstract}
									published_date={article.published_date}
									image={article.multimedia?.[3]?.url}
								/>
							)
							: [1, 2, 3].map(i => <ArticleItemSkeleton key={i} />)
					}
					{articles.count > 20 && <Pagination count={count} />}
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