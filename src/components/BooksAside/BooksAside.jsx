import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { getBooksNamesSelector } from '../../store/books/articleSlice';
import { useQuery } from '../../hooks';
import Title from '../Title';

const BooksAside = () => {
  const query = useQuery();
  const location = useLocation();
  const history = useHistory();
  const names = useSelector(getBooksNamesSelector);
  const [category, setCategory] = useState('hardcover-nonfiction');

  const handleSetCategory = name => {
    query.set('list', category);

    history.push({ pathname: location.pathname, search: query.toString() });
    setCategory(name);
  };

  return (
    <>
      <Title title="Categories" />
      <Stack spacing={1}>
        {
          names.map(name =>
            <Chip
              key={name.list_name_encoded}
              color={category === name.list_name_encoded ? 'info' : 'default'}
              size="small"
              label={name.display_name}
              onClick={() => handleSetCategory(name.list_name_encoded)}
            />,
          )
        }
      </Stack>
    </>
  );
};

export default BooksAside;
