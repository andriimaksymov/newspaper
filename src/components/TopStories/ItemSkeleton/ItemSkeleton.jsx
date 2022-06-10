import { memo } from 'react';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const ItemSkeleton = () => {
  return (
    <Stack spacing={2} direction="row">
      <Skeleton height={40} width={60} variant="rectangular" />
      <Stack spacing={1} flexGrow={1}>
        <Skeleton width="100%" height={24} variant="rectangular" />
        <Skeleton width="100%" height={16} variant="rectangular" />
        <Skeleton width="40%" height={12} variant="rectangular" />
      </Stack>
    </Stack>
  );
};

export default memo(ItemSkeleton);
