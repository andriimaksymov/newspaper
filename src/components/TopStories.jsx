import { useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import { topStoriesClearAction, topStoriesFetchAction } from "../store/articles/actions";
import PropTypes from "prop-types";
import { getTopStories } from "../store/articles/articleSlice";
import PageHeader from "./PageHeader";

const useStyles = makeStyles({
  stickyAside: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '95vh',
    paddingTop: '30px',
  },
  asideList: {
    overflow: 'auto',
    flexGrow: 1,
    paddingRight: 10,
  },
  topStory: {
    marginBottom: 25,
  },
  number: {
    flex: '0 0 50px',
    fontSize: 30,
    lineHeight: 1.25,
    minWidth: 40,
    color: '#ccc',
  },
});

const TopStories = ({ count }) => {
  const type = 'home';
  const dispatch = useDispatch();
  const classes = useStyles();
  const top_stories = useSelector(getTopStories(count));

  useEffect(() => {
    dispatch(topStoriesFetchAction({ type }));

    return () => {
      dispatch(topStoriesClearAction());
    };

    // eslint-disable-next-line
  }, []);

  return (
    <aside className={classes.stickyAside}>
      <PageHeader title="Popular Posts"/>
      <div className={classes.asideList}>
        {
          top_stories?.map((story, key) =>
            <Grid container spacing={1} className={classes.topStory} key={story.url}>
              <Grid item xs="auto">
                <div className={classes.number}>
                  {`${key < 9 ? '0' : ''}${key + 1}`}
                </div>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="h4">{story.title}</Typography>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <Typography variant="body1">{story.byline}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" component={Moment} format="MMM D">
                      {story.published_date}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>,
          )
        }
      </div>
    </aside>
  );
};

TopStories.propTypes = {
  count: PropTypes.number,
};

export default TopStories;