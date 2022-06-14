import { styled } from '@mui/material/styles';

export const ImageWrapper = styled('div')({
  display: 'flex',
  minWidth: 440,
  'img': {
    width: '100%',
    height: 'auto',
  },
});

export const Content = styled('div')({
  padding: 50,
  height: '100%',
  backgroundColor: '#f8f9fa',
});

export const StyledLink = styled('span')(({ theme }) => ({
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  marginBottom: '.5rem',
  ':hover': {
    color: theme.palette.primary.main,
  },
}));
