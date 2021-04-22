import React from 'react';

const Projects = () => {
	return (
		<div className="mt-3">
			<br />
			<br />
			<div className='row'>
				<div className='col-12'>
					<h1 className="section-heading text-center">Projects!</h1>
					<br />
					<br />
					<img src={process.env.PUBLIC_URL + '/projects.gif'} width="100%"  height="400px" />
					<br />
					<br />
					<br />
					<p className="text-left">
						Ah, did we just land on the project page? Right, the scary as well as the fun part is here. Well yeah! Let's dig them
					</p>
					<br />
					<br />
				</div>
			</div>
			
			<div className="row">
				<div className='col-12 col-md-6'>
					<a href="https://www.fidelity.co.uk" target="_blank">
						<img src={process.env.PUBLIC_URL + '/fil-uk.png'} width="100%" />
					</a>
				</div>

				<div className='col-12 col-md-6'>
					<h4 className='text-left'> Fidelity International - UK</h4>
					<p className='text-left'>
						<small className="text-left">Organisation: Fidelity</small>
						<ul>
							<li>Developed the website for the client ( <a href="https://www.fidelity.co.uk" target="_blank"> Fidelity International</a> )</li>
							<li>Developed the site using Vanilla JS, Django, React and Node.</li>
							<li>Implemented Session Timeout Using Debouncing from Loadash</li>
							<li>Implemented the Search Feature and improvised the search algorithm and architecture (+30% Big O)</li>
							<li>Worked as an individual contributor as well as in a team</li>
							<li>Handled critical and challenging requirements from Business such as Search optimisation, SEO enhancements, Responsiveness, lower Load time etc</li>
						</ul>
					</p>
				</div>

			</div>
			<br />
			<br />
			<hr />
			<br />
			<br />

			{/*For the German site*/}
			<div className="row">
				<div className='col-12 col-md-6'>
					<a href="https://www.fidelity.de" target="_blank">
						<img src={process.env.PUBLIC_URL + '/fil-de.png'} width="100%" />
					</a>
				</div>

				<div className='col-12 col-md-6'>
					<h4 className='text-left'> Fidelity International - Germany</h4>
					<p className='text-left'>
						<small className="text-left">Organisation: Fidelity</small>
						<ul>
							<li>Developed the website for the client ( <a href="https://www.fidelity.co.uk" target="_blank"> Fidelity International</a> )</li>
							<li>Developed the site using Vanilla JS, Django, React and Node.</li>
							<li>Implemented Session Timeout Using Debouncing from Loadash</li>
							<li>Resolved challenging login and logout issues critical for business</li>
							<li>Worked as an individual contributor as well as in a team</li>
							<li>Handled critical and challenging requirements from Business such as Search optimisation, SEO enhancements, Responsiveness, lower Load time etc</li>
						</ul>
					</p>
				</div>

			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			{/*For the goIbibo site*/}
			<div className="row">
				<div className='col-12 col-md-6'>
					<a href="https://www.goibibo.com" target="_blank">
						<img src={process.env.PUBLIC_URL + '/goIbibo.png'} width="100%" />
					</a>
				</div>

				<div className='col-12 col-md-6'>
					<h4 className='text-left'> GoIbibo - India</h4>
					<p className='text-left'>
						<small className="text-left">Organisation: goIbibo</small>
						<ul>
							<li>Developed using Javascript, jQuery, HTML5 and CSS3</li>
							<li>Implemented APIs using ROR and integrated them on Javascript</li>
							<li>Made the website responsive</li>
							<li>SEO optimisation</li>
						</ul>
					</p>
				</div>

			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			{/*For the Nations Trust Bank site*/}
			<div className="row">
				<div className='col-12 col-md-6'>
					<a href="https://www.nationstrust.com/" target="_blank">
						<img src={process.env.PUBLIC_URL + '/ntb.png'} width="100%" />
					</a>
				</div>

				<div className='col-12 col-md-6'>
					<h4 className='text-left'> Nations Trust Bank - Sri Lanka</h4>
					<p className='text-left'>
						<small className="text-left">Organisation: Moonraft Innovation Labs</small>
						<ul>
							<li>Developed using Javascript, Angular, jQuery, HTML5 and CSS3</li>
							<li>Responsive website built with Bootstrap</li>
							<li>Went to Sri-Lanka for onsite and worked in collaboration with Infosys(For the Backend )</li>
						</ul>
					</p>
				</div>

			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			{/*For the ICICI site*/}
			<div className="row">
				<div className='col-12 col-md-6'>
					<a href="http://www.tescobengaluru.com" target="_blank">
						<img src={process.env.PUBLIC_URL + '/icici.png'} width="100%" />
					</a>
				</div>

				<div className='col-12 col-md-6'>
					<h4 className='text-left'> ICICI</h4>
					<p className='text-left'>
						<small className="text-left">Organisation: Moonraft Innovation Labs</small>
						<ul>
							<li>Developed using Javascript, Angular, jQuery, HTML and CSS</li>
							<li>Responsive website </li>
							<li>Developed site for internal use for Customer care section of ICICI ( <small><b>Please note*: </b> This screenshot is only for reference, 
								the actual site that was developed is accessible only to internal employees </small></li>
						</ul>
					</p>
				</div>

			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />


			{/*For the Tesco site*/}
			<div className="row">
				<div className='col-12 col-md-6'>
					<a href="http://www.tescobengaluru.com" target="_blank">
						<img src={process.env.PUBLIC_URL + '/tesco.png'} width="100%" />
					</a>
				</div>

				<div className='col-12 col-md-6'>
					<h4 className='text-left'> Tesco HSC - India</h4>
					<p className='text-left'>
						<small className="text-left">Organisation: Tesco</small>
						<ul>
							<li>Developed using Javascript, Angular, jQuery, HTML and CSS</li>
							<li>Responsive website </li>
							<li>Worked on ATG module as a Backend developer</li>
							<li>Solved critical issues related to front-end</li>
						</ul>
					</p>
				</div>

			</div>
			<br />
			<br />
			<br />
			<br />
		</div>
	)
};

export default Projects;