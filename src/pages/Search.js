import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";
import { useQuery } from "../utils/hooks";
import { searchClearAction, searchFetchAction } from "../store/articles/actions";
import PageHeader from "../components/PageHeader";
import ArticleItem from "../components/ArticleItem";
import Pagination from "../components/Pagination";

const Search = () => {
  const query = useQuery();
  const q = query.get('query');
  const page = query.get('page');
  const { list, pages } = useSelector(state => state.articles.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchFetchAction({ config: { params: { q, page } } }));

    return () => {
      dispatch(searchClearAction());
    };
  }, [dispatch, q, page]);

  return (
    <Layout>
      <PageHeader title="Search" />
      {
        list && list.map(item => (
          <ArticleItem
            key={item._id}
            description={item.abstract}
            published_date={item.pub_date}
            image={item.multimedia[0]?.url}
            title={item.headline.main}
            section={item.section_name}
          />
        ))
      }
      <Pagination
        count={pages}
      />
    </Layout>
  );
};

export default Search;