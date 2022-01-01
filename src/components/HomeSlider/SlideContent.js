import { memo } from "react";
import Grid from "@mui/material/Grid";
import Moment from "react-moment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";

const SlideContent = ({ media, section, title, abstract, byline, url, nytdsection, published_date }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <div className={classes.imageWrap}>
          <img className={classes.image}
               src={media["media-metadata"]?.[2]?.url} height={media["media-metadata"]?.[2]?.height}
               width={media["media-metadata"]?.[2]?.width} alt={media["caption"]} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={classes.slideContent}>
          <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
          <Typography gutterBottom variant="body2">
            {abstract} <a href={url} rel="noreferrer" target="_blank">read more</a>
          </Typography>
          <Box mt={2}>
            <Typography variant="body1">
              {byline} in <Link to={routes.articles(nytdsection)}>{section}</Link>
            </Typography>
            <Typography variant="body2" component={Moment} format="MMM D">
              {published_date}
            </Typography>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default memo(SlideContent);