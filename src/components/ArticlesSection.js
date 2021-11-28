import { useEffect, memo, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";

import { articlesClearAction, articlesFetchAction } from "../store/articles/actions";
import ArticleList from "./ArticleList";
import PageHeader from "./PageHeader";
import { useDeepEqualMemo, useQuery } from "../utils/hooks";
import routes from "../utils/routes";
import Pagination from "./Pagination";

const useStyles = makeStyles({
    wrap: {
        padding: '30px 0',
    },
});

const ArticlesSection = ({ type, pagination = true }) => {
    const query = useQuery();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const params = useDeepEqualMemo({ offset: query.get("page") || 10 });

    const { articles, fetching } = useSelector(({ articles, common }) => ({
        fetching: common.fetching,
        articles: articles.articles[type],
    }));

    useEffect(() => setCount(Math.round(articles?.count / 20)), [articles?.count]);


    useEffect(() => {
        dispatch(articlesFetchAction({ type, config: { params } }));

        return () => dispatch(articlesClearAction());
    }, [dispatch, type, params]);

    return (
        <div className={classes.wrap}>
            <PageHeader title={type} />
            <ArticleList fetching={fetching} list={articles?.list} />
            {
                pagination &&
                <Pagination
                    count={count}
                    queryPage={params.offset}
                    pathname={routes.articles(type)}
                />
            }
        </div>
    );
};

export default memo(ArticlesSection);