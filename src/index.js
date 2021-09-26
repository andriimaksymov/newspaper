import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import theme from "./styles/theme";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
