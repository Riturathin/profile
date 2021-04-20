import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<div className="mt-3">
			<Nav fill activeKey="/">
			  <Nav.Item>
			    <Nav.Link href="/home">Home</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link eventKey="/profile">Technical Expertise/Skills </Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link eventKey="/projects">Projects</Nav.Link>
			  </Nav.Item>
			   <Nav.Item>
			    <Nav.Link eventKey="/previous-employers">Previous Employers</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link eventKey="/contact-me" >
			      Contact me
			    </Nav.Link>
			  </Nav.Item>

			  <Nav.Item>
			    <Nav.Link eventKey="/miscellaneous" >
			     Miscellenous
			    </Nav.Link>
			  </Nav.Item>
			</Nav>
		</div>
	)
};
export default Header ;