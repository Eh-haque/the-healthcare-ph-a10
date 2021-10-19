import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const style = { height: '100px', width: '100px', color: '#198754', margin: 'auto' }
    return (
        <Container>
            <div className='bg-primary text-white p-5 my-5 rounded'>
                <h4 className=''>Contact</h4>
                <h1 className='border-bottom pb-4'>Our Destination</h1>
            </div>

            <Row xs={1} md={3}>
                <Col>
                    <div className='shadow my-2'>
                        <div className='mx-auto'>
                            <FaLocationArrow style={style} className='my-2' />
                        </div>
                        <div className='bg-primary text-white rounded p-3'>
                            <h2>Our Address</h2>
                            <h5>Tupac Amaru 2022 - Off 204</h5>
                            <h5>Comas-Lima - Peru</h5>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='shadow'>
                        <div className='mx-auto my-2'>
                            <FaMailBulk style={style} className='my-2' />
                        </div>
                        <div className='bg-primary text-white rounded p-3'>
                            <h2>Email Address</h2>
                            <h5>info@healthcare.com</h5>
                            <h5>health@care.com</h5>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='shadow my-2'>
                        <div className='mx-auto'>
                            <FaPhone style={style} className='my-2' />
                        </div>
                        <div className='bg-primary text-white rounded p-3'>
                            <h2>Call Center</h2>
                            <h5>Appointmemt: 528098545</h5>
                            <h5>Emergency: 1280934556</h5>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='my-5 bg-light rounded p-5'>
                <Col>
                    <h2 className='border-bottom mb-3 text-success'>Business Contact</h2>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia</p>

                    <Form style={{ textAlign: 'left' }}>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridName">
                                <Form.Label>name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" required/>
                            </Form.Group>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required/>
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;