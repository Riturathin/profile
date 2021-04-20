import React from 'react';

const Home = () => {
	return (
		<div className="mt-3">
			<br />
			<br />
			<div className='row'>
				<div className='col-12'>
					<h1 className="section-heading text-left">What I Know?</h1>
					<br />
					<br />
				</div>
				<div className='col-12 col-md-4'>
					<img src={process.env.PUBLIC_URL + '/mern_stack.jpeg'} width="100%" />
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						My love for technology is endless. Often I try to build things using new technologies. And oh yes! of course, 
						Javascript is my bread and butter! So, I try to keep myself updated on Javascript and related frameworks and libraries 
						like Mongo DB, Express, React and Node. Yay! the MERN stack 
					</p>
					<br />
					<br />
					<h4 className='text-left'> Other Skills</h4>
					<p className='text-left'>
						<ul>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>AJAX</li>
							<li>Django(Python)</li>
							<li>ROR</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	)
};

export default Home;