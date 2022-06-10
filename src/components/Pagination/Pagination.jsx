import { memo, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Pagination from '@mui/material/Pagination';
import { useQuery } from '../../hooks';

const useStyles = makeStyles({
  paginationWrap: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
});

const PaginationRounded = ({ count = 0 }) => {
  const classes = useStyles();
  const query = useQuery();
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);

  const handleChangePage = (e, page) => {
    query.set('page', page);

    history.push({ pathname: location.pathname, search: query.toString() });
    setPage(page);
  };

  useEffect(() => {
    const queryPage = query.get('page');
    if (queryPage) setPage(+queryPage);
  }, [query]);

  return (
    count > 0 &&
    <div className={classes.paginationWrap}>
      <Pagination
        count={count}
        page={page}
        shape="rounded"
        hideNextButton
        hidePrevButton
        onChange={handleChangePage}
      />
    </div>
  );
};

PaginationRounded.propTypes = {
  count: PropTypes.number,
};

export default memo(PaginationRounded);
