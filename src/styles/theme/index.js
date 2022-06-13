import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: 'hsl(90, 50%, 65%)',
      main: 'hsl(90, 50%, 53%)',
      dark: 'hsl(90, 50%, 35%)',
    },
    background: {
      light: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: 'Cabin, sans-serif',
    body1: {
      color: '#808080',
      fontSize: '.9rem',
    },
    body2: {
      color: '#808080',
      fontSize: '.8rem',
    },
    h1: {
      lineHeight: 1.2,
      fontWeight: 500,
      fontSize: '2.25rem',
    },
    h2: {
      lineHeight: 1.2,
      fontWeight: 500,
      fontSize: '1.875rem',
    },
    h3: {
      lineHeight: 1.2,
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h4: {
      lineHeight: 1.2,
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h5: {
      lineHeight: 1.2,
      fontWeight: 500,
      fontSize: '1.125rem',
    },
    h6: {
      lineHeight: 1.2,
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
        ':root': {
          '--color-primary': 'hsl(90, 50%, 53%)',
        },
        '::-webkit-scrollbar': {
          width: 10,
        },
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#888',
        },
        body: {
          color: '#000000',
          fontWeight: '300',
        },
        header: {
          flexShrink: 0,
        },
        footer: {
          flexShrink: 0,
        },
        main: {
          flexGrow: 1,
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
            color: 'hsl(90, 50%, 53%)',
          },
          '&.active': {
            color: 'hsl(90, 50%, 53%)',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1170,
      xl: 1536,
    },
  },
});

export default theme;
