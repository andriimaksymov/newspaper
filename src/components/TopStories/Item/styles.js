import { styled } from '@mui/material/styles';

export const ItemWrapper = styled('a')({
  display: 'grid',
  gridRowGap: 5,
  gridTemplateColumns: '50px 1fr',
});

export const Number = styled('div')({
  gridRow: 'span 3',
  fontSize: 30,
  lineHeight: 1,
  color: '#ccc',
});

