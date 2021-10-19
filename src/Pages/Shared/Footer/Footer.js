import React from 'react';
import { Col, Container, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../media/icon/logo.png';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="shadow-lg bg-white">
            <Container>
                <div className="row">
                    <Col md={5} className="mt-3">
                        <Image className='w-50' src={logo} />
                        <h3 className='my-2'>0-000-111-2233</h3>
                        <p>Call us now if you are in a medical emergency need, we will reply swiftly and provide you with a medical aid.</p>
                    </Col>

                    <Col md={3} className="mt-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/">Home </Nav.Link>
                        </ul>
                    </Col>

                    <Col md={4} className="mt-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <Nav.Link as={Link} to="#!"><FaFacebook /></Nav.Link>
                            <Nav.Link as={Link} to="#!"><FaTwitter /></Nav.Link>
                            <Nav.Link as={Link} to="#!"><FaLinkedin /></Nav.Link>
                        </ul>
                    </Col>
                </div>
            </Container>

            <div className="text-center py-3">© 2021 Copyright:
                <Link to='#'> www.healthcare.com</Link>
            </div>

        </footer>
    );
};

export default Footer;