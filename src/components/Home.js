import React from 'react';

const Home = () => {
	return (
		<div className="mt-3">
			<br />
			<br />
			<div className='row'>
				<div className='col-12'>
					<h1 className="section-heading text-left">What I do?</h1>
					<br />
					<br />
				</div>
				<div className='col-12 col-md-4'>
					<img src={process.env.PUBLIC_URL + '/ritumoni_sarma.png'} width="100%" />
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						Currently working as a Technical Lead with ITC Infotech. Leading a team of Front End developers, taking 
						architectural decisions and providing insights and guidance through Code review sessions. As a Front-end web 
						developer I am focussed on building an application’s user experience to effectively and aesthetically deliver 
						information to site visitors and helping in making major business impact.
					</p>
					<br />
					<br />
					<h4 className='text-left'> Highlights</h4>
					<p className='text-left'>
						<ul>
							<li>Successfully leading a team of 15+ individuals.</li>
							<li>Developed flowcharts and diagrams to describe and lay out logical operational steps.</li>
							<li>Providing effective solutions for enterprise level systems.</li>
							<li>Using latest cutting-edge technologies to meet the business requirements like React/Python(Django)/ Node etc.</li>
							<li>Developed the German Website of Fidelity( <a href="https://www.fidelity.de/">www.fidelity.de</a>) using React, Node.js , Javascript and Django.</li>
							<li>Implemented the Search Feature and improvised the search algorithm and architecture (+30% Big O)</li>
							<li>Cracked a legacy application code and transformed it into React and Node based application </li>
							<li>Worked as an individual contributor as well as in a team</li>
							<li>Won multiple accolades, both as a team player and individual contributor.</li>
							<li>Received multiple <b>“On the Spot”</b> award from client for handling business criticality efficiently</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	)
};

export default Home;