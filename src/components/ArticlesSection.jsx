import { useEffect, memo } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

import { articlesClearAction, articlesFetchAction } from "../store/articles/actions";
import { useDeepEqualMemo, useQuery } from "../utils/hooks";
import ArticleList from "./ArticleList";
import Pagination from "./Pagination";
import Title from "./Title";

const useStyles = makeStyles({
  wrap: {
    padding: '30px 0',
  },
});

const ArticlesSection = ({ type, pagination = true }) => {
  const query = useQuery();
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useDeepEqualMemo({ offset: query.get("page"), limit: pagination ? 20 : 5 });

  const { articles, fetching } = useSelector(({ articles, common }) => ({
    fetching: common.fetching,
    articles: articles.articles[type],
  }));

  useEffect(() => {
    dispatch(articlesFetchAction({ type, config: { params } }));

    return () => {
      dispatch(articlesClearAction());
    };
  }, [dispatch, type, params]);

  return (
    <div className={classes.wrap}>
      <Title title={type} />
      <ArticleList fetching={fetching} list={articles?.list} />
      {
        articles && pagination &&
        <Pagination
          count={articles.pages}
        />
      }
    </div>
  );
};

ArticlesSection.propTypes = {
  type: PropTypes.string,
  pagination: PropTypes.bool,
};

export default memo(ArticlesSection);