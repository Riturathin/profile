import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="mt-3">
			<Nav fill activeKey="/profile">
			  <Nav.Item>
			    <Link to="/profile/home">What I do ?</Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Link to="/profile/skills">What I know?</Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Link to="/profile/projects">Projects</Link>
			  </Nav.Item>
			   <Nav.Item>
			    <Link to="/profile/employers">Previous Employers</Link>
			  </Nav.Item>
			  {/*<Nav.Item>
			    <Link to="/profile/contact-me" >
			      Contact me
			    </Link>
			  </Nav.Item>

			  <Nav.Item>
			    <Link to="/profile/miscellaneous" >
			     Miscellenous
			    </Link>
			  </Nav.Item>*/}
			</Nav>
			<hr />
		</div>
	)
};
export default Header ;