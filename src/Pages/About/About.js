import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaClock, FaHome, FaHospitalUser, FaMedkit, FaShuttleVan, FaUserCheck, FaUserMd } from 'react-icons/fa';

const Aboutus = () => {
    const style = { width: '50px', height: '50px', margin: '20px' };
    return (
        <Container>
            <div className='bg-primary text-white p-5 mb-5 rounded mt-5'>
                <h4 className='py-4 rounded'>Health Care</h4>
                <h1 className='border-bottom pb-4'>Hospital</h1>
            </div>
            <Row style={{ textAlign: 'left' }} className='my-5'>
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum.
                    </p>
                    <div>
                        <ol>
                            <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in.</li>
                            <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue.</li>
                            <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula.</li>
                            <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices.</li>
                        </ol>
                    </div>
                </Col>
            </Row>

            <h2 className='bg-success p-4 text-white rounded'>Why Choose Us</h2>
            <Row xs={1} md={2} className='text-white g-4'>
                <Col className='rounded'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2>01</h2>
                            <h4>Qualified Doctors</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium iste vero!</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='rounded'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2>01</h2>
                            <h4>Qualified Doctors</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium iste vero!</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='rounded'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2>01</h2>
                            <h4>Qualified Doctors</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium iste vero!</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='rounded'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2>01</h2>
                            <h4>Qualified Doctors</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium iste vero!</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row xs={1} md={1} lg={3} className='text-white py-5'>
                <Col className='bg-success p-3 rounded'>
                    <FaShuttleVan style={style} />
                    <h2>Emergency 24/7</h2>
                    <div>
                        <p>Emergency cases only:</p>
                        <p>Ambulance: 51 000 0000</p>
                        <p>Surgery Room: 51 000 0000</p>
                    </div>
                </Col>
                <Col className='bg-primary p-3 rounded'>
                    <FaUserMd style={style} />
                    <h2>Schedule</h2>
                    <div>
                        <p>Monday - Friday: 08:00 - 20:00</p>
                        <p>Saturday: 08:00 - 17:00</p>
                        <p>Sunday & Holidays: 09:00 - 15:00</p>
                    </div>
                </Col>
                <Col className='bg-success p-3 rounded'>
                    <FaClock style={style} />
                    <h2>Call Center</h2>
                    <div>
                        <p>Appointment: 51 000 0000</p>
                        <p>Laboratory: 51 000 0000</p>
                        <p>Business: 51 000 0000</p>
                    </div>
                </Col>
            </Row>

            <Row className='bg-light rounded mb-5 p-5'>
                <Col>
                    <h2 className='text-success'>Our Patients Says</h2>
                    <FaUserCheck style={style} />
                    <h5>Meliza Flores</h5>
                    <small>Patient</small>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat tempora maiores minima facilis pariatur doloribus dolor explicabo quae labore itaque iusto necessitatibus, excepturi ratione vero qui id eos dolorem! Nisi ipsum velit officiis natus beatae! Velit, deserunt in reprehenderit maiores facere ea impedit libero, suscipit quasi perferendis saepe iste laboriosam.</p>
                    <div className='d-flex justify-content-evenly'>
                        <Button>Prev</Button>
                        <Button>Next</Button>
                    </div>
                </Col>
            </Row>

            <Row xs={2} md={4} className='g-4 mb-5'>
                <Col>
                    <Card className='shadow'>
                        <FaHospitalUser style={style} className='mx-auto' />
                        <h2>350</h2>
                        <h6>Qualified Staff</h6>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow'>
                        <FaUserCheck style={style} className='mx-auto' />
                        <h2>70520</h2>
                        <h6>Patients Attended</h6>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow'>
                        <FaMedkit style={style} className='mx-auto' />
                        <h2>7526</h2>
                        <h6>Insured</h6>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow'>
                        <FaHome style={style} className='mx-auto' />
                        <h2>550</h2>
                        <h6>Hospital Rooms</h6>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Aboutus;