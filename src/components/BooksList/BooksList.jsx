import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { getBooksSelector } from '../../store/books/articleSlice';
import BooksItem from './BooksItem';
import BooksItemSkeleton from './BooksItemSkeleton';

const BooksList = () => {
  const books = useSelector(getBooksSelector);

  return (
    <Grid container spacing={3}>
      {
        books.length
          ? books.map(book =>
            <Grid item xs={12} sm={6} key={book.book_uri}>
              <BooksItem
                title={book.title}
                author={book.author}
                img={book.book_image}
                buy_links={book.buy_links}
                description={book.description}
              />
            </Grid>,
          )
          : <>
            <Grid item xs={12} sm={6}>
              <BooksItemSkeleton />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BooksItemSkeleton />
            </Grid>
          </>
      }
    </Grid>
  );
};

export default BooksList;
