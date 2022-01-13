import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

import { topStoriesClearAction, topStoriesFetchAction } from "../../store/articles/actions";
import { getTopStories } from "../../store/articles/articleSlice";
import ItemSkeleton from "./ItemSkeleton";
import Title from "../Title";
import Item from "./Item";

const useStyles = makeStyles({
  aside: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '30px',
  },
  asideList: {
    display: 'grid',
    gridGap: 10,
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

const TopStories = ({ type = 'home', count }) => {
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
    <aside className={classes.aside}>
      <div>
        <Title title="Top Stories" />
      </div>
      <div className={classes.asideList}>
        {
          !top_stories
          ? top_stories?.map((story, key) => (
              <Item
                key={key}
                url={story.url}
                title={story.title}
                byline={story.byline}
                date={story.published_date}
                number={`${key < 9 ? '0' : ''}${key + 1}`}
              />
            ),
          ) : <ItemSkeleton/>
        }
      </div>
    </aside>
  );
};

TopStories.propTypes = {
  type: PropTypes.string,
  sticky: PropTypes.bool,
  count: PropTypes.number,
};

export default TopStories;