import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShopProduct from '../ShopProduct/ShopProduct';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <div className='bg-primary text-white p-5 mt-5 rounded'>
                <h4 className=''>Shop</h4>
                <h1 className='border-bottom pb-4'>Products</h1>
                <p className='px-5 pt-5 text-'>Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services.
                </p>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 py-5">
                {
                    products.map(product => <ShopProduct product={product} key={product.id}></ShopProduct>)
                }
            </Row>
        </Container>
    );
};

export default Shop;