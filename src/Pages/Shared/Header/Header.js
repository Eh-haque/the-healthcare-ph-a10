import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../media/icon/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
                <Navbar.Brand href="#home"><Image className='w-25' src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;