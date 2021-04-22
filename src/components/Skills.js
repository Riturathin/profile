import React from 'react';

const Home = () => {
	return (
		<div className="mt-3">
			<br />
			<br />
			<div className="col-12">
				
			</div>
	

			<div className='row'>
				<div className='col-12'>
					<h1 className="section-heading text-center">What I Know?</h1>
					<br />
					<br />
					<img src={process.env.PUBLIC_URL + '/what-know.gif'} width="100%" height="400px" />
					<br />
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
							<li>Git</li>
							<li>ROR</li>
							<li>Express</li>
							<li>SCSS</li>
							<li>jQuery</li>
							<li>Data Structures & Algorithms</li>
						</ul>
					</p>
					<p className="text-left">
						Just for the record, have played around with multiple ideas and projects. You can find some of my cool developments 
						at my <a href="https://github.com/Riturathin/">Github Profile</a>
					</p>
				</div>
				<br />
				<br />
			</div>
		</div>
	)
};

export default Home;