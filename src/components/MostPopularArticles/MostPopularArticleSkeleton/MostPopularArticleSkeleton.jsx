import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const MostPopularArticleSkeleton = () => {
  return (
    <Box py={5}>
      <Grid container spacing={2}>
        <Grid xs={6} item>
          <Skeleton variant="rectangular" height={360} />
        </Grid>
        <Grid xs={6} item>
          <Stack spacing={2}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="rectangular" height={70} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MostPopularArticleSkeleton;
