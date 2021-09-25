import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { articlesClearAction, articlesFetchAction } from "../store/articles/actions";

export default function Articles() {
	const dispatch = useDispatch();
	const { articles } = useSelector(({ articles }) => ({
		articles: articles.list
	}));
	
	useEffect(() => {
		dispatch(articlesFetchAction());
		
		return () => dispatch(articlesClearAction());
	}, [dispatch]);
	
	return (
		<div>
			{
				articles && articles.map((article, key) =>
					<Link to={article.slug_name} key={key}>
						{console.log(article)}
						{article.title}
					</Link>
				)
			}
		</div>
	)
}