import React ,{ useRef, useState } from 'react';
import "./Signup.css"
import {useAuth} from "../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";
import {Navbar} from "../components/common";

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const {signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError("Passwords do not match")
        }

        try{
            setError("");
            setLoading(true);
            const response = await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/login");
            console.log(response);
        } catch {
            setError("Failed to creat an account")
        }
    }

    return (
        <>
            <Navbar />
            <div id="background">
                <div className="login__content">

                    <form onSubmit={handleSubmit}
                          className="login">
                        <h1 className="login__title">Sign Up</h1>
                        {error && alert(setError)}
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
                        <div className="login__group">
                            <label className="login__group__label"> </label>
                            <input ref={passwordConfirmationRef}
                                   className="login__group__input"
                                   placeholder="Confirm Password"
                                   type="password"
                            />
                        </div>

                        <button disabled={loading}
                                className="login__sign-in"
                                type="submit">
                            Register
                        </button>

                        <div className="login__uselessText">
                            <p className="login__text">Remember me?
                                <Link to="/login"> Click to login </Link>
                            </p>
                            <p className="login__text login__secondary-cta__text--need-help">
                                Need help?</p>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Signup;