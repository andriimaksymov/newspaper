import { useSelector } from 'react-redux';
import { getBooksSelector } from '../../store/books/articleSlice';
import Grid from '@mui/material/Grid';
import BooksItem from './BooksItem';

const BooksList = () => {
  const books = useSelector(getBooksSelector);

  return (
    <Grid container spacing={3}>
      {
        books?.map(book =>
          <Grid item xs={12} sm={6} key={book.book_uri}>
            <BooksItem
              title={book.title}
              author={book.author}
              img={book.book_image}
              description={book.description}
            />
          </Grid>,
        )
      }
    </Grid>
  );
};

export default BooksList;
