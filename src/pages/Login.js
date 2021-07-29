
import React, {useRef, useState} from 'react';
import {useAuth} from "../contexts/AuthContext";
import "./Login.css"
import { Link, useHistory } from "react-router-dom"

function Login () {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setError("");
            setLoading(true);
            const response = await login(emailRef.current.value,
                passwordRef.current.value)
            history.push("/")

            console.log(response);
        } catch {
            setError("Failed to log in")
        }
    }

    return (
        <>
            <div id="background">
                <div className="login__content">

                    <form onSubmit={handleSubmit}
                          className="login">
                        <h1 className="login__title">Log In</h1>
                        <p>
                            {error && alert(setError)}
                        </p>
                        <div className="login__group">
                            <label className="login__group__label"> </label>
                            <input ref={emailRef}
                                   className="login__group__input"
                                   placeholder="Email Address"
                                   type="email"
                            />
                        </div>
                        <div className="login__group">
                            <label className="login__group__label"> </label>
                            <input ref={passwordRef}
                                   className="login__group__input"
                                   placeholder="Password"
                                   type ="password"
                            />
                        </div>

                        <button disabled={loading}
                                className="login__sign-in"
                                type="submit">
                            Log In
                        </button>

                        <div className="login__uselessText">
                            <p className="login__text">
                                Don't have an account? <Link to="/signup"> Register here </Link>
                            </p>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Login;
