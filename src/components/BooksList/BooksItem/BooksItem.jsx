import { memo } from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { isEqualPropsMemo } from '../../../utils/common';
import { ItemLink } from './styles';
import routes from '../../../utils/routes';

const BooksItem = ({ img, title, description, author }) => {
  return (
    <ItemLink to={routes.books}>
      <img width="100%" height="auto" alt={title} src={img} />
      <Stack spacing={1}>
        <Typography variant="h6" color="inherit">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2">Author:</Typography>
          <Typography variant="body1" color="inherit">{author}</Typography>
        </Stack>
      </Stack>
    </ItemLink>
  );
};

BooksItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default memo(BooksItem, isEqualPropsMemo);
