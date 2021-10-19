import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hook/useFirebase';

const Register = () => {

    const { handleGoogleLogin, user, handleGithubLogin, handleUserRegister, error, setName } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isLogin, setIsLogin] = useState(false);

    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    };
    const handlePassword = e => {
        setPassword(e.target.value);
    };
    // console.log(email, password);

    const handleRegister = (event) => {
        handleUserRegister(email, password);
        event.preventDefault();
        // console.log(event);
    }

    return (
        <Container>
            <Row xs={1} md={2} className='align-items-center'>
                <Col className='col-md-7' style={{ textAlign: 'left' }}>
                    <Form>
                        <h2 className='text-primary mt-5'>Please Register</h2>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder="Enter name" onBlur={handleName} required />
                        </Form.Group >
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Select your Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={handlePassword} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <div>
                            <Button variant="primary" type="submit" className='me-2' onClick={handleRegister}>
                                Register
                            </Button>
                        </div><hr />
                        <Link to='/login' className='mb-3 rounded p-2 border mt-3'>Already Registered? Click to Login</Link>
                        <div className="mt-4">
                            <Button variant='primary' onClick={handleGoogleLogin} className="me-2 mb-2">
                                {user?.displayName ? user?.displayName : 'Google sign in'}
                            </Button>
                            <Button variant='success' onClick={handleGithubLogin} className='mb-2'>
                                {user?.displayName ? user?.displayName : 'Github sign in'}
                            </Button>
                        </div><hr />
                        <p className='bg-danger text-white mb-5 p-2 rounded'>{error ? error : 'No Error 😊'}</p>
                    </Form>
                </Col>

                <Col className='col-md-5'>
                    <div>
                        <Image
                            className="w-100 p-5"
                            src="https://cdn.pixabay.com/photo/2019/08/30/15/48/lock-4441691_960_720.png"
                            alt=""
                        />
                    </div>
                    ;
                </Col>
            </Row>
        </Container>
    );
};

export default Register;