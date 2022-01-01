import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";
import { useQuery } from "../utils/hooks";
import { searchClearAction, searchFetchAction } from "../store/articles/actions";
import PageHeader from "../components/PageHeader";
import ArticleItem from "../components/ArticleItem";
import Pagination from "../components/Pagination";
import SortedSelect from "../components/SortedSelect";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

const sortedList = [
  { value: 'best', label: 'Order by relevance' },
  { value: 'newest', label: 'Order by newest' },
  { value: 'oldest', label: 'Order by oldest' },
];

const SearchFilterWrap = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: 20,
  marginBottom: 30,
});

const Search = () => {
  const query = useQuery();
  const location = useLocation();
  const q = query.get('query');
  const page = query.get('page');
  const sort = query.get('sort');
  const { list, pages } = useSelector(state => state.articles.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchFetchAction({ config: { params: { q, page, sort } } }));

    return () => {
      dispatch(searchClearAction());
    };

    // eslint-disable-next-line
  }, [dispatch, location]);

  return (
    <Layout>
      <PageHeader title="Search" />
      <SearchFilterWrap>
        <SortedSelect sortedList={sortedList} value={sort} />
      </SearchFilterWrap>
      {
        list && list.map(item => (
          <ArticleItem
            key={item._id}
            description={item.abstract}
            published_date={item.pub_date}
            title={item.headline.main}
            section={item.section_name}
            {...(item.multimedia.length && {image: 'https://static01.nyt.com/' + item.multimedia[0]?.url})}
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