import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../components/Landing';

const RouteManager = () => {
		return (
			<Route to='/' exact component={ Landing } />  
		)
}

export default RouteManager;