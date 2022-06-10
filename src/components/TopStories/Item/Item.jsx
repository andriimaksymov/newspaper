import { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import StyledDate from '../../StyledDate';
import { ItemWrapper, Number } from './styles';
import { useHistory } from 'react-router-dom';
import routes from '../../../utils/routes';

const Item = ({ id, url, number, title, byline, date, ...rest }) => {
  const history = useHistory();

  const handleOpenArticle = () => {
    localStorage.setItem('article', url);
    history.push({ pathname: routes.articleView(Math.random() * 10) });
  };

  return (
    <ItemWrapper {...rest} onClick={handleOpenArticle}>
      <Number>
        {number}
      </Number>
      <Typography variant="h5" component="h3">{title}</Typography>
      <Typography variant="body2">{byline}</Typography>
      <StyledDate date={date} />
    </ItemWrapper>
  );
};

Item.propTypes = {
  date: PropTypes.string,
  url: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
  byline: PropTypes.string,
};

export default memo(Item);
