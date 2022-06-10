import { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './styles';

const Title = ({ title, ...rest }) => {
  return (
    <StyledTitle variant="h5" component="h2" {...rest}>{title}</StyledTitle>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(Title);
