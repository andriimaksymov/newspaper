import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";
import { makeStyles } from "@mui/styles";
import routes from "../utils/routes";

const useStyles = makeStyles({
  articleItem: {
    '& + $articleItem': {
      marginTop: 30,
    },
    '& $sectionLink': {
      marginLeft: 10,
    },
  },
  imageWrap: {
    display: 'flex',
  },
  title: {
    display: 'box',
    overflow: 'hidden',
    maxHeight: '3.25em',
    lineClamp: 2,
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    '-webkit-box-orient': 'vertical',
  },
  description: {
    display: 'box',
    overflow: 'hidden',
    maxHeight: '4.5em',
    lineClamp: 3,
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    '-webkit-box-orient': 'vertical',
  },
  sectionLink: {
    marginLeft: 10,
  },
});

export default function ArticleItem({ title, description, image, published_date, section }) {
  const classes = useStyles();

  return (
    <div className={classes.articleItem}>
      <Grid container spacing={2}>
        <Grid item xs={8} md>
          <Typography className={classes.title} variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.description} gutterBottom>
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <small>
              <Moment format="MMMM D, Y">
                {published_date}
              </Moment>
            </small>
            {section && <Chip
              clickable
              color="secondary"
              size="small"
              variant="outlined"
              label={section}
              className={classes.sectionLink}
              component={Link}
              to={routes.articles(section.toLowerCase())}
            />}
          </Typography>
        </Grid>
        <Grid item xs={4} md="auto">
          <div className={classes.imageWrap}>
            <img src={image} alt={title} width={210} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}