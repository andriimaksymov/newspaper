import { styled } from '@mui/styles';

export const ReviewsWrapper = styled('div')({
  padding: '40px 0',
});

export const ReviewsList = styled('div')({
  display: 'grid',
  gridTemplateRows: 'repeat(3, auto)',
  gridTemplateColumns: '40% 1fr',
  gridGap: 30,

  '& > *:first-child': {
    gridRow: 'span 3',
  },
});
