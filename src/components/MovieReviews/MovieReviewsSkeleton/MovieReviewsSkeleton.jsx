import { memo } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { ItemWrap } from './styles';

const MovieReviewsSkeleton = ({ size }) => {
  return (
    <ItemWrap size={size}>
      <Skeleton width="100%" height={size === 'large' ? 200 : 100} />
      <Stack spacing={1} mt={size === 'large' ? 2 : 0}>
        <Skeleton width="80%" height={18} />
        <Skeleton width="100%" height={15} />
        <Skeleton width="90%" height={15} />
        <Skeleton width="30%" height={13} />
      </Stack>
    </ItemWrap>
  );
};

export default memo(MovieReviewsSkeleton);
