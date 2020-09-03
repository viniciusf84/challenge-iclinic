import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MasterProvider } from './contexts/MasterContext';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
	<MasterProvider>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
		<GlobalStyle />
	</MasterProvider>
);

export default App;
