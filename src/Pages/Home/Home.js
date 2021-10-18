import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Row, Container } from 'react-bootstrap';
import banner1 from '../../media/banner/5330589.png'
import banner2 from '../../media/banner/5330591.png'
import banner3 from '../../media/banner/5570418.png'
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
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
            <Container>
                <h2>What services</h2>
                <span>Health Care offers?</span>
                <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence.
                </p>
                <Row xs={1} md={2} lg={3} className="g-4 mb-5 my-3">
                    {
                        services.map(service => <Services service={service} key={service.id}></Services>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;