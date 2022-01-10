import { memo } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Date } from "./styles";

const StyledDate = ({ date, ...rest }) => {
  return (
    <Date {...rest} variant="body2" component={Moment} format="MMM D">
      {date}
    </Date>
  );
};

StyledDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default memo(StyledDate);