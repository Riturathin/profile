import React from 'react';

const Employers = () => {
	return (
		<div className="mt-3">
			<br />
			<br />
			<div className="col-12">
				
			</div>
	

			<div className='row'>
				<div className='col-12'>
					<h1 className="section-heading text-center">Previous Employers</h1>
					<br />
					<br />
					<img src={process.env.PUBLIC_URL + '/employer.gif'} width="100%" height="400px" />
					<br />
					<br />
					<br />
					<p>We all love to get hired, don't we? It's a proud feeling to mention where you have worked in the past. Some of the 
					prestigious organisations I was/am a part of</p>
				</div>

			</div>

			<div className="row">
				<div className='col-12 col-md-4'>
					<a href="https://www.itcinfotech.com/" target="_blank">
						<img src={process.env.PUBLIC_URL + '/Itc-infotech-logo.png'} width="100%" />
					</a>
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						<br />
						<br />
						<h3><b>ITC INFOTECH ( 2018 - current )</b></h3>
					</p>
				</div>
			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			<div className="row">
				<div className='col-12 col-md-4'>
					<a href="https://www.fidelity.co.uk/" target="_blank">
						<img src={process.env.PUBLIC_URL + '/Fidelity.png'} width="100%" />
					</a>
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						<br />
						<br />
						<h3><b>Fidelity International ( 2018 - current ) - Client </b></h3>
					</p>
				</div>
				<br />
				<br />
			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			<div className="row">
				<div className='col-12 col-md-4'>
					<a href="https://arinet.com/" target="_blank">
						<img src={process.env.PUBLIC_URL + '/Ari-logo.png'} width="100%" />
					</a>
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						<br />
						<h3><b>Ari Network Services ( 2016 - 2018 ) </b></h3>
					</p>
				</div>
				<br />
				<br />
			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			<div className="row">
				<div className='col-12 col-md-4'>
					<a href="https://www.indecomm.com/" target="_blank">
						<img src={process.env.PUBLIC_URL + '/indecomm-global.png'} width="100%" />
					</a>
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						<br />
						<h3><b>Indecomm Global Services ( 2015 - 2016 ) </b></h3>
					</p>
				</div>
				<br />
				<br />
			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			<div className="row">
				<div className='col-12 col-md-4'>
					<a href="https://www.goibibo.com/" target="_blank">
						<img src={process.env.PUBLIC_URL + '/goibibo-logo.png'} width="100%" />
					</a>
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						<br />
						<h3><b>goIbibo ( 2015 - 2016 ) - Client </b></h3>
					</p>
				</div>
				<br />
				<br />
			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			<div className="row">
				<div className='col-12 col-md-4'>
					<a href="https://moonraft.com/home" target="_blank">
						<img src={process.env.PUBLIC_URL + '/moonraft.png'} width="100%" />
					</a>
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						<br />
						<br />
						<h3><b>Moonraft Innovation Labs ( 2014 ) </b></h3>
					</p>
				</div>
				<br />
				<br />
			</div>

			<br />
			<br />
			<hr />
			<br />
			<br />

			<div className="row">
				<div className='col-12 col-md-4'>
					<a href="http://www.tescobengaluru.com" target="_blank">
						<img src={process.env.PUBLIC_URL + '/tesco-logo.png'} width="100%" />
					</a>
				</div>
				<div className='col-12 col-md-8'>
					<p className="text-left">
						<br />
						<br />
						<h3><b>Tesco Hindustan ( 2012 - 2014 ) </b></h3>
					</p>
				</div>
				<br />
				<br />
			</div>

		</div>
	)
};

export default Employers;