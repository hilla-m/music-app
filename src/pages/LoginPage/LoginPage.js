import React from 'react';
import { Form , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage(props) {
    return (
        <div className="p-login">
            <h1>Login to My Music</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button type="button" className="btn">Login</button>
            </Form>
            <p>Don't have an account yet ?</p>
            <button type="button" className="btn"><Link to="/signup" className="signup-link">Signup for free</Link></button>
        </div>
    );
}

export default LoginPage;