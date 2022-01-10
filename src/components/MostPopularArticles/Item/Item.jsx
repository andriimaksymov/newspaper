import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import routes from "../../../utils/routes";
import StyledDate from "../../StyledDate";
import { Caption, Content, ImageWrapper, StyledLink } from "./styles";

const Item = ({ media, section, title, abstract, byline, url, nytdsection, published_date }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <ImageWrapper>
          <img
            src={media["media-metadata"]?.[2]?.url} height={media["media-metadata"]?.[2]?.height}
            width={media["media-metadata"]?.[2]?.width} alt={media["caption"]} />
        </ImageWrapper>
      </Grid>
      <Grid item xs={6}>
        <Content>
          <Typography gutterBottom variant="h3" component="h2">
            <StyledLink href={url} target="_blank" rel="noreferrer">
              {title}
            </StyledLink>
          </Typography>
          <Typography gutterBottom variant="body1">
            {abstract}
          </Typography>
          <Box mt={2}>
            <Stack spacing={0.5} direction="row">
              <Caption component="span" variant="body2">{byline}</Caption>
              <Typography component="span" variant="body2">in</Typography>
              <Caption component={Link} variant="body2" to={routes.articles(nytdsection)}>{section}</Caption>
            </Stack>
            <StyledDate date={published_date} />
          </Box>
        </Content>
      </Grid>
    </Grid>
  );
};

Item.propTypes = {
  url: PropTypes.string,
  media: PropTypes.object,
  title: PropTypes.string,
  byline: PropTypes.string,
  section: PropTypes.string,
  abstract: PropTypes.string,
  nytdsection: PropTypes.string,
  published_date: PropTypes.string,
};

export default memo(Item);