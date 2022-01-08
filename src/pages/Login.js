
import React, { useRef, useState } from 'react';
import {useAuth} from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom"
import "./globalstyling/Login.css"
import {Footer, Form, Navbar} from "../components/common";

function Login () {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const isInvalid = password === '' || emailAddress === '';

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setError("");
            setLoading(true);
            const response = await login(emailAddress, password)
            history.push("/")

            console.log(response);
        } catch (error) {
            setError("Failed to log in" , error)
            setEmailAddress('');
            setPassword('');
            setLoading(false)
            console.error(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="main">
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSubmit} method="POST">

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                placeholder="Email Address"
                                type="email"
                                value={emailAddress}
                                onChange={({ target }) => setEmailAddress(target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="Password"
                                type ="password"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />
                        </Form.Group>

                        <Form.Submit type="submit" disabled={loading + isInvalid}>
                            Login
                        </Form.Submit>

                        <Form.Text>
                            Don't have an account? <Link to="/signup">Register here</Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                        </Form.TextSmall>

                    </Form.Base>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default Login;
