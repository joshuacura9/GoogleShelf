import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import * as ReactBootstrap from "react-bootstrap";
const Header = () => {
    return (

    		<div>
		    <ReactBootstrap.Navbar bg="dark" variant="dark" expand="lg">
		  	<ReactBootstrap.Navbar.Brand href="#home">Google</ReactBootstrap.Navbar.Brand>
		  	<ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
		  	<ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
		    <ReactBootstrap.Nav className="mr-auto">
		      <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
		      <ReactBootstrap.Nav.Link href="#link">About</ReactBootstrap.Nav.Link>
		    </ReactBootstrap.Nav>
		  	</ReactBootstrap.Navbar.Collapse>
			</ReactBootstrap.Navbar>
			  <div className="App" style = {{color: 'white'}}>
		       <h1 style = {{fontSize:'100px'}}>Google Library</h1>
		      </div>
			</div>
		    
    );
}

export default Header;


