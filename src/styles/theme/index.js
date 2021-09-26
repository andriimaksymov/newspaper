import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			light: "hsl(90, 50%, 65%)",
			main: "hsl(90, 50%, 53%)",
			dark: "hsl(90, 50%, 35%)",
		}
	},
	typography: {
		fontFamily: 'Cabin, sans-serif',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				"#root": {
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column'
				},
				header: {
					flexShrink: 0
				},
				footer: {
					flexShrink: 0
				},
				main: {
					flexGrow: 1
				}
			}
		}
	},
});

export default theme;