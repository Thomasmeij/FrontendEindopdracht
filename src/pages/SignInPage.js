import React ,{ useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./SignInPage.css"
import {Navbar} from "../components/common";

function SignIn () {
    const { handleSubmit, register } = useForm();

    return (
        <>
        <Navbar />
            <body>
            <div className="login__content">
                <form className="login">
                    <h1 className="login__title">Sign In</h1>
                    <div className="login__group">
                        <label className="login__group__label">

                        </label>
                        <input className="login__group__input" placeholder="Email Address"
                               type="text" required="true"/>

                    </div>
                    <div className="login__group">
                        <label className="login__group__label">
                        </label>
                        <input className="login__group__input" placeholder="Password"
                               type="password" required="true"/>
                    </div>


                    <button className="login__sign-in" type="button">Sign In</button>

                    <div className="login__uselessText">
                        <p className="login__text" href="#">Remember me</p>
                        <p className="login__text login__secondary-cta__text--need-help"
                           href="#">Need help?</p>
                    </div>
                </form>
            </div>
            </body>
        </>
    )
}

export default SignIn;
