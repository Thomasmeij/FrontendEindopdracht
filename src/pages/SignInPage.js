import React, {useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./SignInPage.css"
import {Navbar} from "../components/common";
import { authContext } from "../context/Authcontext";

function SignIn () {
    const { handleSubmit, register } = useForm();
    const { login } = useContext( authContext );

    async function onSubmit(data) {

        try {
            console.log("data uit form: ", data);
            const response = await axios.post("http://localhost:3000/login",
                {email: data.email, password: data.password});

            console.log(response);
            //passing JWT Token to the context
            login(response.data.accessToken);

        } catch (e) {
            console.log("something went wrong!", e);
        }
    }

    return (
        <>
        <Navbar />
            <body>
            <div className="login__content">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="login">
                    <h1 className="login__title">Sign In</h1>
                    <div className="login__group">
                        <label className="login__group__label">

                        </label>
                        <input className="login__group__input" placeholder="Email Address"
                               type="email"
                               {...register("email")}/>
                    </div>

                    <div className="login__group">
                        <label className="login__group__label">
                        </label>
                        <input className="login__group__input" placeholder="Password"
                               type="password"
                            {...register("password")}
                        />
                    </div>

                    <button className="login__sign-in" type="submit">
                        Sign In
                    </button>

                    <div className="login__uselessText">
                        <p className="login__text">Remember me</p>
                        <p className="login__text login__secondary-cta__text--need-help">
                            Need help?</p>
                    </div>
                    <p>No account yet? <Link to="/signUp">Register</Link> first! </p>
                </form>
            </div>
            </body>
        </>
    )
}

export default SignIn;
