import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { fetchBooksNamesRequest, fetchBooksRequest } from '../store/books/actions';
import { useQuery } from '../hooks';
import BooksAside from '../components/BooksAside';
import Layout from '../components/layout';
import Title from '../components/Title';
import BooksList from '../components/BooksList';

export default function Books() {
  const query = useQuery();
  const dispatch = useDispatch();
  const list = query.get('list') || 'hardcover-fiction';

  useEffect(() => {
    dispatch(fetchBooksRequest({ list, date: new Date() }));

    // eslint-disable-next-line
  }, [list]);

  useEffect(() => {
    dispatch(fetchBooksNamesRequest({}));

    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item md={3}>
          <BooksAside />
        </Grid>
        <Grid item md={9}>
          <Title title="Books" />
          <BooksList />
        </Grid>
      </Grid>
    </Layout>
  );
}
