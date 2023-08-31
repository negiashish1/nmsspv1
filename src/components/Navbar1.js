import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';

function Navbar1() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeNav, setActiveNav] = useState("#");

	return (
		// <div style={{
		// 	display: 'block', width: 550, padding: 30
		// }}>
		<div class="container">
			<h5>नारायणी महिला शक्ति संगठन</h5>
			<Navbar color="light" light expand="md">
				{/* <NavbarBrand href="/">Brand</NavbarBrand> */}
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="#">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#history">Our History</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  href="#blogs">Blogs</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#about">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#services">Services</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#getintouch">Contact Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#admin">Testimonials</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#admin">Admin</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default Navbar1;
