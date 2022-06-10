import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { isEqualPropsMemo } from '../../utils/common';
import routes from '../../utils/routes';
import StyledDate from '../StyledDate';
import useStyles from './styles';

const ArticleItem = ({ url, title, description, byline, image, published_date, section }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleOpenArticle = () => {
    localStorage.setItem('article', url);
    history.push({ pathname: routes.articleView(Math.random() * 10) });
  };

  return (
    <div className={classes.articleItem} onClick={handleOpenArticle}>
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
};

ArticleItem.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  byline: PropTypes.string,
  section: PropTypes.string,
  description: PropTypes.string,
  published_date: PropTypes.string,
};

export default memo(ArticleItem, isEqualPropsMemo);
