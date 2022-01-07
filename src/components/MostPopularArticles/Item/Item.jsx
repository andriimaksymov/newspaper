import { memo } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import routes from "../../../utils/routes";
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
          <Typography gutterBottom variant="h5" component="h2">
            <StyledLink href={url} target="_blank" rel="noreferrer">
              {title}
            </StyledLink>
          </Typography>
          <Typography gutterBottom variant="body2">
            {abstract}
          </Typography>
          <Box mt={2}>
            <Grid container spacing={1}>
              <Grid item>
                <Caption component="span" variant="body1">{byline}</Caption>
              </Grid>
              <Grid item>
                <Caption component="span" variant="body2">in</Caption>
              </Grid>
              <Grid item>
                <Caption component="span" variant="body2">
                  <Link to={routes.articles(nytdsection)}>{section}</Link>
                </Caption>
              </Grid>
            </Grid>

            <Typography variant="body2" component={Moment} format="MMM D">
              {published_date}
            </Typography>
          </Box>
        </Content>
      </Grid>
    </Grid>
  );
};

export default memo(Item);