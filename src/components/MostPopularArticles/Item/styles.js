import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const ImageWrapper = styled('div')({
  display: "flex",
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

export const StyledLink = styled('a')(({ theme }) => ({
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  marginBottom: '.5rem',
  ':hover': {
    color: theme.palette.primary.main,
  },
}));

export const Caption = styled(Typography)({
  fontSize: 12
});