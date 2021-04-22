import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Home from '../components/Home';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Employers from '../components/Employers';

const RouteManager = () => {
		return (
			<>
				<Route path='/' exact component={ Landing } />  
				<Route path='/profile' exact component={ Landing } />  
				<Route path='/home' component={ Home } />  
				<Route path='/skills' component={ Skills } />  
				<Route path='/projects' component={ Projects } />  
				<Route path='/employers' component={ Employers } />  
			</>
		)
}

export default RouteManager;