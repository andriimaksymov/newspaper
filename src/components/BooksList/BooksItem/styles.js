import { styled } from '@mui/styles';
import { Link } from 'react-router-dom';

export const ItemLink = styled(Link)(() => ({
  color: 'inherit',
  cursor: 'pointer',
  display: 'grid',
  gridGap: 20,
  alignItems: 'flex-start',
  gridTemplateColumns: '120px 1fr',
}));
