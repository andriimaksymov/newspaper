import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: "hsl(90, 50%, 65%)",
      main: "hsl(90, 50%, 53%)",
      dark: "hsl(90, 50%, 35%)",
    },
    background: {
      light: "#f8f9fa",
    },
  },
  typography: {
    fontFamily: 'Cabin, sans-serif',
    body2: {
      color: "#808080",
    },
    h6: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "#root": {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
        "::-webkit-scrollbar": {
          width: 10,
        },
        "::-webkit-scrollbar-track": {
          background: '#f1f1f1',
        },
        "::-webkit-scrollbar-thumb": {
          background: "#888",
        },
        body: {
          color: '#000000',
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
      },
    },
  },
});

export default theme;