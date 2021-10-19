import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Row, Container, Col, Button, Card, Image } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import banner1 from '../../media/banner/5330589.png'
import banner2 from '../../media/banner/5330591.png'
import banner3 from '../../media/banner/5570418.png'
import Services from '../Services/Services';
import testImg1 from '../../media/testimonial/speaker2.jpg'; 
import testImg2 from '../../media/testimonial/speaker10.jpg'; 

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='home'>
            <Carousel fade>
                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/* services */}
            <Container id='services' className='my-5'>
                <h2>What services</h2>
                <h5>Health Care offers?</h5>
                <p className='border-bottom'>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence.
                </p>
                <Row xs={1} md={2} lg={3} className="g-4 mb-5 my-3">
                    {
                        services.map(service => <Services service={service} key={service.id}></Services>)
                    }
                </Row>

                {/* --------------your doctor------------ */}
                <div className='mb-5'>
                    <h2>Your Doctor</h2>
                    <h5>Your Treatment</h5>
                    <p className='border-bottom'>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital collaboration</p>
                </div>
                <Row xs={1} md={2} lg={4} className='' >

                    <Col>
                        <div className='shadow p-5 rounded bg-success text-white card-hover'>
                            <h2>Great staff</h2>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                            <Button variant='primary'>Read More <FaArrowAltCircleRight /></Button>
                        </div>
                    </Col>
                    <Col>
                        <div className='shadow p-5 my-5 rounded bg-primary text-white card-hover'>
                            <h2>Affordable</h2>
                            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance to maximise offline indicators.</p>
                            <Button variant='success'>Read More <FaArrowAltCircleRight /></Button>
                        </div>
                    </Col>
                    <Col>
                        <Card className='shadow p-5 rounded bg-success text-white card-hover'>
                            <h2>Great facilities</h2>
                            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
                            <Button>Read More <FaArrowAltCircleRight /></Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow p-5 my-5 rounded bg-primary text-white card-hover'>
                            <h2>Consult us</h2>
                            <p>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</p>
                            <Button variant='success'>Read More <FaArrowAltCircleRight /></Button>
                        </Card>
                    </Col>
                </Row>

                {/*-----------testimonials------------*/}
                <div className='mb-5'>
                    <h2>CLIENT</h2>
                    <h5>TESTIMONIALS</h5>
                    <p className='border-bottom'>The best reference is a good word</p>
                </div>
                <Row md={2} xs={1}>
                    <Col>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg1} className='img-fluid'/>
                            <h4 className='mt-4'>PAUL LEE</h4></Card.Title>
                            <Card.Body>
                                <p>Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo. Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante. Vivamus sagittis velit quis dictum ultricies. Quisque posuere rhoncus erat, sit amet aliquet augue.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg2} className='img-fluid'/>
                            <h4 className='mt-4'>ANN CLARK</h4></Card.Title>
                            <Card.Body>
                                <p>Quisque posuere rhoncus erat, sit amet aliquet augue. Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante. Vivamus sagittis velit quis dictum ultricies. Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Home;