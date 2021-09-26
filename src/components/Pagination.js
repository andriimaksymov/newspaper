import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import history from "../utils/history";
import { useQuery } from "../utils/hooks";

export default function PaginationRounded() {
	const query = useQuery();
	const [page, setPage] = useState(0);
	
	const handleChangePage = (e, page) => {
		query.set('page', page);
		
		history.push({ pathname: '/articles', search: query.toString() });
		setPage(page);
	}
	
	return (
		<Stack spacing={2}>
			<Pagination count={6} defaultPage={page} shape="rounded" onChange={handleChangePage} />
		</Stack>
	)
}