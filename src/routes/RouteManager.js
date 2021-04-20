import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Home from '../components/Home';
import Skills from '../components/Skills';

const RouteManager = () => {
		return (
			<>
				<Route path='/' exact component={ Landing } />  
				<Route path='/home' exact component={ Home } />  
				<Route path='/skills' exact component={ Skills } />  
			</>
		)
}

export default RouteManager;