import { memo } from "react";
import ArticleItem from "./ArticleItem";
import ArticleItemSkeleton from "./ArticleItemSkeleton";

const ArticleList = ({ list }) => {
	return (
		list
			? list.map((article, key) =>
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
	)
};

export default memo(ArticleList);