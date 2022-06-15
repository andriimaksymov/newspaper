import { styled } from '@mui/styles';

export const ItemWrap = styled('span')(({ size }) => ({
  color: 'inherit',
  ...(size === 'large' ? {
    display: 'block',
  } : {
    display: 'grid',
    gridGap: 20,
    alignItems: 'flex-start',
    gridTemplateColumns: '140px 1fr',
  }),
}));
