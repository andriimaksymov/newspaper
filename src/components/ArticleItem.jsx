import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import routes from "../utils/routes";
import StyledDate from "./StyledDate";

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
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    minHeight: 140,
    backgroundColor: '#f3f2f2',
    '& .MuiSvgIcon-root': {
      width: 100,
      height: 100,
      color: "#808080",
    },
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
});

export default function ArticleItem({ title, description, byline, image, published_date, section }) {
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
          <Stack spacing={0.5} direction="row">
            <Typography color="textPrimary" component="span" variant="body2">{byline}</Typography>
            <Typography component="span" variant="body2">in</Typography>
            <Typography color="textPrimary" component={Link} variant="body2"
                        to={routes.articles(section.toLowerCase())}>{section}</Typography>
          </Stack>
          <StyledDate date={published_date} />
        </Grid>
        <Grid item xs={4} md="auto">
          <div className={classes.imageWrap}>
            {
              image
                ? <img src={image} alt={title} width={210} />
                : <InsertPhotoIcon />
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
