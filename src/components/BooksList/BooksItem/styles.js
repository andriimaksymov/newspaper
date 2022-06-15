import { styled } from '@mui/styles';

export const StyledBookItem = styled('div')(() => ({
  color: 'inherit',
  display: 'grid',
  gridGap: 20,
  alignItems: 'flex-start',
  gridTemplateColumns: '120px 1fr',
}));
