import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="mt-3">
			<Nav fill activeKey="/profile">
			  <Nav.Item>
			    <Link to="/home">What I do ?</Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Link to="/skills">What I know?</Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Link to="/projects">Projects</Link>
			  </Nav.Item>
			   <Nav.Item>
			    <Link to="/employers">Previous Employers</Link>
			  </Nav.Item>
			  {/*<Nav.Item>
			    <Link to="/contact-me" >
			      Contact me
			    </Link>
			  </Nav.Item>

			  <Nav.Item>
			    <Link to="/miscellaneous" >
			     Miscellenous
			    </Link>
			  </Nav.Item>*/}
			</Nav>
			<hr />
		</div>
	)
};
export default Header ;