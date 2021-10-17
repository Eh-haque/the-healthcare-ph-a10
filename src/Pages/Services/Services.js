import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Services = (props) => {
    const { title, desc, img } = props.service;
    return (
        <Col>
            <Card className='py-5 h-100'>
                <Card.Img className='w-50 mx-auto mb-4' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button>Go some where</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;