import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LightSide from '../pages/LightSide';
import DarkSide from '../pages/DarkSide';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/lightside" component={LightSide} />
		<Route path="/darkside" component={DarkSide} />
	</Switch>
);

export default Routes;
