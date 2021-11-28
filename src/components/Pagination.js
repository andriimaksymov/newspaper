import { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useQuery } from "../utils/hooks";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    paginationWrap: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
    },
});

const PaginationRounded = ({ count = 0, pathname }) => {
    const classes = useStyles();
    const query = useQuery();
    let history = useHistory();
    const [page, setPage] = useState(1);

    const handleChangePage = (e, page) => {
        query.set('page', page);

        history.push({ pathname, search: query.toString() });
        setPage(page);
    };

    useEffect(() => {
        const queryPage = query.get('page');
        if (queryPage) setPage(+queryPage);
    }, [query]);

    return (
        count > 0 &&
        <div className={classes.paginationWrap}>
            <Stack spacing={2}>
                <Pagination
                    count={count}
                    page={page}
                    shape="rounded"
                    hideNextButton
                    hidePrevButton
                    onChange={handleChangePage}
                />
            </Stack>
        </div>
    );
};

export default memo(PaginationRounded);