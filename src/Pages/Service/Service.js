import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Service = () => {
    let { id } = useParams();

    const [services, setServices] = useState([]);
    const [service, setService] = useState({})

    useEffect(() => {
        fetch('/generated.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {
        const foundService = services.find(service => service.id === Number(id))
        setService(foundService);
    }, [services, id]);

    return (
        <Container className='my-5'>
            <h2 className='text-success'>{service?.title?.toUpperCase()}</h2><hr />
            <div className='d-flex align-items-center my-5'>
                <Image className='p-5' src={service?.img}/>
                <div><h3 className='p-5'>{service?.desc}</h3><Button variant='outline-success'>Book Now</Button></div>
            </div>
            <Button as={Link} to='/home' variant='success'>Back To Home</Button>
        </Container>
    );
};

export default Service;