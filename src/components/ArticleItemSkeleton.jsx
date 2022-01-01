import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export default function ArticleItemSkeleton() {
	return (
		<Box mb={2}>
			<Grid container spacing={3}>
				<Grid item xs={8} md>
					<Stack spacing={1}>
						<Skeleton variant="text" />
						<Skeleton variant="text" height={20} />
						<Skeleton variant="text" width={200} />
					</Stack>
				</Grid>
				<Grid item xs={4} md="auto">
					<Skeleton variant="rectangular" width={190} height={107} />
				</Grid>
			</Grid>
		</Box>
	)
}