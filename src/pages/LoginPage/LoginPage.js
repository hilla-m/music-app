import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ users, onLogin, activeUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showInvalidLogin, setshowInvalidLogin] = useState(false);

    if (activeUser) {
        return <Redirect to="/home" />
    }

    function login(e) {
        e.preventDefault();
        let activeUser = null;
        for (const user of users) {
            if (user.login(email, password)) {
                activeUser = user;
                break;
            }
        }
        if (activeUser) {
            onLogin(activeUser);
        } else {
            setshowInvalidLogin(true);
        }
    }

    return (
        <div className="p-login">
            <h1>Login to My Music</h1>
            <Form onSubmit={login}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
            { showInvalidLogin ? <Alert variant="danger">Invalid Credentials!</Alert> : null}
            <p>Don't have an account yet ?</p>
            <Button type="button"><Link to="/signup" className="signup-link">Signup for free</Link></Button>
        </div>
    );
}

export default LoginPage;