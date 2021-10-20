import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../Hook/useFirebase';
import logo from '../../../media/icon/logo.png'
import './Header.css'

const Header = () => {
    const { user, handleLogout } = useFirebase();
    return (
        <Navbar bg="white" expand="lg" sticky='top' className='shadow rounded'>
            <Container>
                <Navbar.Brand as={Link} className='w-25' to="home"><Image fluid src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav variant='pills' defaultActiveKey='/home'
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={HashLink} className='rounded navStyle' to="/home#home" eventKey="link-1"><h5>Home</h5></Nav.Link>
                        <Nav.Link as={HashLink} className='rounded navStyle' to="/home#services" eventKey="link-2"><h5>Service</h5></Nav.Link>
                        <Nav.Link as={Link} className='rounded navStyle' to="/shop" eventKey="link-3"><h5>Shop</h5></Nav.Link>
                        <Nav.Link as={Link} className='rounded navStyle' to="/about" eventKey="link-4"><h5>AboutUs</h5></Nav.Link>
                        <Nav.Link as={Link} className='rounded navStyle' to="/contact" eventKey="link-5"><h5>ContactUs</h5></Nav.Link>
                        {user?.displayName ?
                            <Button variant='danger' className='text-white navStyle rounded' onClick={handleLogout}><h5>Logout {user?.displayName}</h5></Button> :
                            <Nav.Link as={Link} className='navStyle rounded navStyle' to="/login" eventKey="link-6"><h5>Login</h5></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;