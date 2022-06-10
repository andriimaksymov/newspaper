import { memo } from 'react';
import PropTypes from 'prop-types';
import ArticleItem from '../ArticleItem';
import ArticleItemSkeleton from '../ArticleItemSkeleton';
import { isEqualPropsMemo } from '../../utils/common';

const ArticleList = ({ list, fetching }) => {
  return (
    list && !fetching
      ? list.map((article, key) =>
        <ArticleItem
          key={key}
          byline={article?.byline}
          title={article.title}
          section={article.section}
          description={article.abstract}
          published_date={article.published_date}
          image={article.multimedia?.[1]?.url}
        />,
      )
      : [1, 2, 3].map(i => <ArticleItemSkeleton key={i} />)
  );
};

ArticleList.propTypes = {
  fetching: PropTypes.bool,
  list: PropTypes.array,
};

export default memo(ArticleList, isEqualPropsMemo);
