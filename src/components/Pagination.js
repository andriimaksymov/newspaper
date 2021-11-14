import { memo, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import history from "../utils/history";
import { useQuery } from "../utils/hooks";

const PaginationRounded = ({ count = 0, pathname }) => {
	const query = useQuery();
	const [page, setPage] = useState(0);

	const handleChangePage = (e, page) => {
		query.set('page', page);

		history.push({ pathname, search: query.toString() });
		setPage(page);
	}

	return (
		count &&
		<Stack spacing={2}>
			<Pagination
				count={count}
				page={page}
				shape="rounded"
				hideNextButton
				hidePrevButton
				defaultPage={page}
				onChange={handleChangePage}
			/>
		</Stack>
	)
};

export default memo(PaginationRounded);