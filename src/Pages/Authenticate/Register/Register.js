import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
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
    console.log(email, password);

    const handleRegister = e => {
        handleUserRegister(email, password);
        e.preventDefault();
    }

    // const handleToggle =e=>{
    //     setIsLogin(e.target.checked)
    // }

    return (
        <Container>
            <Row xs={1} md={2} className='align-items-center'>
                <Col style={{ textAlign: 'left' }}>
                    <Form>
                        <h2 className='text-primary mt-5'>Please Register</h2>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onBlur={handleName} required />
                        </Form.Group>
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
                            <Form.Check type="checkbox" label="Already Registered?" />
                        </Form.Group>
                        <div>
                            <Button variant="primary" type="submit" className='me-2' onClick={handleRegister}>
                                Register
                            </Button>
                        </div><hr />
                        <Link to='/login' className='mb-3'>Already Registered? Click to Login</Link><hr />
                        <div className="login-btn mt-4">
                            <Button variant='primary' onClick={handleGoogleLogin} className="me-2">
                                {user?.displayName ? user?.displayName : 'Google sign in'}
                            </Button>
                            <Button variant='success' onClick={handleGithubLogin}>
                                {user?.displayName ? user?.displayName : 'Github sign in'}
                            </Button>
                        </div><hr />
                        <p className='bg-danger text-white my-5 p-2 rounded'>{error ? error : 'No Error 😊'}</p>
                    </Form>
                </Col>

                <Col className="col-md-6">
                    <div className="right-side-image">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/MSBbLcd/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg"
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