import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

import { topStoriesClearAction, topStoriesFetchAction } from "../store/articles/actions";

export default function TopStories() {
	const dispatch = useDispatch();
	const { top_stories } = useSelector(({ articles }) => ({
		top_stories: articles.top_stories
	}));
	
	useEffect(() => {
		dispatch(topStoriesFetchAction({ type: "home" }));
		
		return () => dispatch(topStoriesClearAction());
	}, [dispatch]);
	
	return (
		<aside>
			{top_stories && top_stories.list?.map?.((story, key) =>
				<div key={key}>
					<Typography>{story.title}</Typography>
				</div>
			)}
		</aside>
	)
}