import { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from "@mui/material/Typography";

import StyledDate from "../../StyledDate";
import { ItemWrapper, Number } from "./styles";

const Item = ({ url, number, title, byline, date, ...rest }) => {
  return (
    <ItemWrapper {...rest} href={url} target="_blank" rel="noreferrer">
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