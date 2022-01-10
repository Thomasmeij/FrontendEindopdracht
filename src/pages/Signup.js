import React ,{ useState } from 'react';
import "./globalstyling/Signup.css"
import {useAuth} from "../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";
import {Footer, Form, Navbar} from "../components/common";

function Signup() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const isInvalid = emailAddress === "" || password === "" || passwordConfirmation === "";

    async function handleSubmit(e){
        e.preventDefault();

        if (password !== passwordConfirmation) {
            return setError("Passwords do not match")
        }

        try{
            setError("");
            setLoading(true);
            const response = await signup(emailAddress, password);
            history.push("/");
            console.log(response);

        } catch {
            setError("Failed to create an account", error)
            setEmailAddress("");
            setPassword("");
            setPasswordConfirmation("");
            setLoading(false)
            console.error(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="main">
                <Form>
                    <Form.Title>Register</Form.Title>
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

                        <Form.Group>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                placeholder="Password"
                                type ="password"
                                value={passwordConfirmation}
                                onChange={({ target }) => setPasswordConfirmation(target.value)}
                            />
                        </Form.Group>

                        <Form.Submit type="submit" disabled={loading + isInvalid}>
                            Register
                        </Form.Submit>

                        <Form.Text>
                            Remember me? <Link to="/login">Click here to Login</Link>
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

export default Signup;