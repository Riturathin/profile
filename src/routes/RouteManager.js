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
				<Route path='/profile/home' component={ Home } />  
				<Route path='/profile/skills' component={ Skills } />  
				<Route path='/profile/projects' component={ Projects } />  
				<Route path='/profile/employers' component={ Employers } />  
			</>
		)
}

export default RouteManager;