import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaStar, FaRegStar, FaDollarSign, FaCartPlus } from 'react-icons/fa';
import Rating from 'react-rating';

const ShopProduct = (props) => {
    const { title, star, price, img } = props.product;
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <Rating className='text-primary' emptySymbol={<FaRegStar />} fullSymbol={<FaStar />} initialRating={star} readonly></Rating><br />
                        <FaDollarSign />{price}
                    </Card.Text>
                    <Button>Add to cart <FaCartPlus /></Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default ShopProduct;