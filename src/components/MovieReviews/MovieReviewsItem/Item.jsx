import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledDate from '../../StyledDate';
import { isEqualPropsMemo } from '../../../utils/common';
import routes from '../../../utils/routes';
import { Description, ImageWrap, ItemLink, Title } from './styles';

const Item = ({ url, size, image, title, description, date }) => {
  const history = useHistory();

  const handleOpenArticle = () => {
    localStorage.setItem('article', url);
    history.push({ pathname: routes.articleView(Math.random() * 10) });
  };

  return (
    <ItemLink onClick={handleOpenArticle} size={size}>
      <ImageWrap size={size}>
        <img src={image} alt={title} />
      </ImageWrap>
      <div>
        <Title variant="h6" gutterBottom>{title}</Title>
        {
          description && <Description variant="body2">{description}</Description>
        }
        <StyledDate date={date} />
      </div>
    </ItemLink>
  );
};

Item.propTypes = {
  url: PropTypes.string,
  date: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default memo(Item, isEqualPropsMemo);
