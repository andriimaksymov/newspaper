import { memo } from "react";
import PropTypes from "prop-types";
import StyledDate from "../../StyledDate";
import { Description, ImageWrap, ItemLink, Title } from "./styles";

const Item = ({ url, size, image, title, description, date, author, section }) => {
  return (
    <ItemLink size={size} href={url} target="_blank" rel="norefferer">
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
  author: PropTypes.string,
  section: PropTypes.string,
  description: PropTypes.string,
};

export default memo(Item);