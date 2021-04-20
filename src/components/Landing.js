import React from 'react';
import '../styles/Landing.css';
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div className="landing-page" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/splash.jpeg'})` }}>
			<div className="landing-page-wrapper">
				<h1 className='landing-page-heading'>
					Hello. I am Ritumoni.
				</h1>
				<h4 className='landing-page-catchphrase'>Technical Lead, Front-End Web Dev, Geek, Free-bird and soccer lover </h4>
				<Link to='/home'>
					<h4 className='landing-page-catchphrase'> Explore  <ArrowRight /></h4>
				</Link>
			</div>
		</div>
	)
}

export default Landing;