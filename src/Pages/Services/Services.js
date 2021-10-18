import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Services = (props) => {
    const { title, desc, img, id } = props.service;
    return (
        <Col>
            <Card className='py-5 h-100'>
                <Card.Img className='w-50 mx-auto mb-4' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button as={NavLink} to={`/service/${id}`}activeStyle={{fontWeight:'bold',color:'red'}}>See Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;