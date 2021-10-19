import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Image className='img-fluid' src='https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1'/>
            <Button className='mb-5' as={Link} to='/home'>Go Back</Button>
        </div>
    );
};

export default NotFound;