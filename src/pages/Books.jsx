import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { fetchBooksNamesRequest, fetchBooksRequest } from '../store/books/actions';
import { getBooksSelector } from '../store/books/articleSlice';
import { useQuery } from '../hooks';
import BooksAside from '../components/BooksAside';
import Layout from '../components/layout';
import Title from '../components/Title';

export default function Books() {
  const query = useQuery();
  const dispatch = useDispatch();
  const books = useSelector(getBooksSelector);
  const list = query.get('list');

  useEffect(() => {
    dispatch(fetchBooksRequest({ list: list || 'hardcover-fiction', date: new Date() }));

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
          <Grid container spacing={3}>
            {
              books?.map(book =>
                <Grid item xs={12} sm={6} md={4} lg={3} key={book.book_uri}>
                  <img width="100%" alt={book.title} src={book.book_image} />
                </Grid>,
              )
            }
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
