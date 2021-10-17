import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../media/icon/logo.png'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} className='w-25' to="home"><Image fluid src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} className='text-primary' to="/home"><h5>Home</h5></Nav.Link>
                        <Nav.Link as={Link} className='text-primary' to="/service"><h5>Service</h5></Nav.Link>
                        <Nav.Link as={Link} className='text-primary' to="/action2"><h5>Link</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;