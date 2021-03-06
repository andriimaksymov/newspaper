import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { isEqualPropsMemo } from '../../../utils/common';
import routes from '../../../utils/routes';
import StyledDate from '../../StyledDate';
import { Content, ImageWrapper, StyledLink } from './styles';

const MostPopularArticlesItem = ({ id, media, section, title, abstract, byline, url, nytdsection, published_date }) => {
  const history = useHistory();

  const handleOpenArticle = () => {
    localStorage.setItem('article', url);
    history.push({ pathname: routes.articleView(id) });
  };

  const image = media['media-metadata']?.[2] || {};

  return (
    <Grid container>
      <Grid item xs="auto">
        <ImageWrapper>
          <img src={image.url} height={image.height} width={image.width} alt={media['caption']} />
        </ImageWrapper>
      </Grid>
      <Grid item xs>
        <Content>
          <Typography gutterBottom variant="h3" component="h2">
            <StyledLink onClick={handleOpenArticle}>
              {title}
            </StyledLink>
          </Typography>
          <Typography gutterBottom variant="body1">
            {abstract}
          </Typography>
          <Box mt={2}>
            <Stack spacing={0.5} direction="row">
              <Typography color="textPrimary" component="span" variant="body2">{byline}</Typography>
              <Typography component="span" variant="body2">in</Typography>
              <Typography color="textPrimary" component={Link} variant="body2"
                          to={routes.articles(nytdsection)}>{section}</Typography>
            </Stack>
            <StyledDate date={published_date} />
          </Box>
        </Content>
      </Grid>
    </Grid>
  );
};

MostPopularArticlesItem.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  title: PropTypes.string,
  byline: PropTypes.string,
  section: PropTypes.string,
  abstract: PropTypes.string,
  nytdsection: PropTypes.string,
  published_date: PropTypes.string,
  media: PropTypes.object,
};

export default memo(MostPopularArticlesItem, isEqualPropsMemo);
