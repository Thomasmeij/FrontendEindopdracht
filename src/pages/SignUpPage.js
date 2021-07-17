import React ,{ useContext } from 'react';
import { useForm } from 'react-hook-form';
import {Navbar} from "../components/common";
import "./SignUpPage.css"

function Register () {
    const { handleSubmit, register } = useForm();

    return (
        <>
            <Navbar />
            <body>
                <form className="login">
                    <h1 className="login__title">Sign Up</h1>
                    <div className="login__group">
                        <label className="login__group__label">Email Address</label>
                        <input className="login__group__input" type="text" required="true"/>

                    </div>
                    <div className="login__group">
                        <label className="login__group__label">Username</label>
                        <input className="login__group__input" type="text" required="true"/>
                    </div>
                    <div className="login__group">
                        <label className="login__group__label">Password</label>
                        <input className="login__group__input" type="password" required="true"/>
                    </div>


                    <button className="login__sign-in" type="button">Sign In</button>

                    <div className="login__uselessText">
                        <a className="login__text" href="#">Remember me</a>
                        <a className="login__text login__secondary-cta__text--need-help"
                           href="#">Need help?</a>
                    </div>
                </form>
            </body>
        </>
    )
}

export default Register;