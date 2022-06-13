import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import routes from '../../utils/routes';

export default function Footer() {
  return (
    <Box py={4} backgroundColor="#f8f9fa" component="footer">
      <Container>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <NavLink to={routes.books}>Books</NavLink>
          </Grid>
          <Grid>
            <Typography variant="body2">
              Copyright ©2021-2022 All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
