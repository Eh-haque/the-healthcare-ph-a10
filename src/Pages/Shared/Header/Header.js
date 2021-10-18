import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hook/useFirebase';
import logo from '../../../media/icon/logo.png'

const Header = () => {
    const { user, handleLogout } = useFirebase();
    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} className='w-25' to="home"><Image fluid src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} className='text-primary' to="/home"><h5>Home</h5></Nav.Link>
                        <Nav.Link as={Link} className='text-primary' to="/service/:id"><h5>Service</h5></Nav.Link>
                        {user?.displayName ?
                            <Button variant='danger' className='text-white' onClick={handleLogout}><h5>Logout {user?.displayName}</h5></Button> :
                            <Nav.Link as={Link} className='text-success' to="/login"><h5>Login</h5></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;