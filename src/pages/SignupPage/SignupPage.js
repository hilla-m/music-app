import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './SignupPage.css'

function SignupPage({addUser, activeUser}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (activeUser) {
        return <Redirect to="/home" />
    }

    function clearForm(){
        setName("");
        setEmail("");
        setPassword("");
    }
    
    function createUser(){
        addUser(name, email, password);
        clearForm();
    }

    return (
        <div className="p-signup">
              <h1>Signup to My Music</h1>
            <Form>
            <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="name" placeholder="Full name" value={name} onChange={e => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={createUser}>Signup</Button>
            </Form>
        </div>
    );
}

export default SignupPage;