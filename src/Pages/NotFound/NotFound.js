import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>page not found</h2>
            <Button as={Link} to='/home'>Go Back</Button>
        </div>
    );
};

export default NotFound;