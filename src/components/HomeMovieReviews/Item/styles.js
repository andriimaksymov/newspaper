import { styled } from '@mui/styles';
import { Typography } from '@mui/material';

export const ItemLink = styled('a')(({ size }) => ({
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

export const ImageWrap = styled('div')(({ size }) => ({
  display: 'flex',
  ...(size === 'large' && {
    marginBottom: 15,
  }),
  '& img': {
    width: '100%',
    height: 'auto',
  },
}));

export const Title = styled(Typography)({
  fontSize: '1rem',
  lineHeight: '1.5rem',
  maxHeight: '1.5rem',
  overflow: 'hidden',
  '-webkit-line-clamp': 1,
  display: 'box',
  '-webkit-box-orient': 'vertical',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal',
});

export const Description = styled(Typography)({
  fontSize: '.8rem',
  lineHeight: '2rem',
  maxHeight: '2.4rem',
  overflow: 'hidden',
  '-webkit-line-clamp': 2,
  display: 'box',
  '-webkit-box-orient': 'vertical',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal',
});
