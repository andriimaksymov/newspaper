import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Container from '@mui/material/Container';
import { navigationSectionsList } from '../../store/articles/articleSlice';
import routes from '../../utils/routes';

const NavigationWrapper = styled('div')({
  position: 'sticky',
  top: 0,
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #efefef',
  zIndex: 100,
});

const NavigationNav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  margin: '0 -1rem',
});

const NavigationNavItem = styled(NavLink)(({ theme }) => ({
  fontSize: '.8rem',
  letterSpacing: '.05rem',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '0.5rem 1rem',
  color: 'inherit',
  '&.active': {
    color: theme.palette.primary.main,
  },
}));

export default function Navigation() {
  const section_list = useSelector(navigationSectionsList);

  return (
    <NavigationWrapper>
      <Container>
        {
          section_list
            ? <NavigationNav>
              <NavigationNavItem to={routes.articles('all')}>All</NavigationNavItem>
              {section_list.map(item =>
                <NavigationNavItem key={item.section} to={routes.articles(item.section)}>
                  {item.display_name}
                </NavigationNavItem>,
              )}
              <IconButton size="small" component={Link} to={routes.categories}>
                <MoreHorizIcon />
              </IconButton>
            </NavigationNav>
            : <Stack direction="row" spacing={2}>
              <Skeleton variant="rectangular" width={100} height={20} />
              <Skeleton variant="rectangular" width={100} height={20} />
              <Skeleton variant="rectangular" width={100} height={20} />
              <Skeleton variant="rectangular" width={100} height={20} />
            </Stack>
        }
      </Container>
    </NavigationWrapper>
  );
}
