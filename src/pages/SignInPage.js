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
                <form className="login">
                    <h1 className="login__title">Sign In</h1>
                    <div className="login__group">
                        <label className="login__group__label">Email or phone number</label>
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

export default SignIn;

//         <h1>Inloggen</h1>
//
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
//
//         <body className="login">
//             <form className="login__form"
//                   onSubmit="nothing">
//                 {/*{handleSubmit(onSubmit)}*/}
//                 <h1 className="login__title">  Sign In </h1>
//
//                 <div className="login__group">
//                     <label className="login__label" htmlFor="email-field" placeholder="Email_adress"> Email adress
//                         <input className="login__input" type="email"
//                                 id="email-field" name="email" required={true}
//                                 {...register("email")}/>
//                     </label>
//                 </div>
//
//                 <div className="login__group">
//                     <label className="login__label" htmlFor="password-field">Wachtwoord:
//                         <input type="password"
//                                 id="password-field"
//                                 name="password"
//                                required={true}
//                                 {...register("password")}/>
//                     </label>
//                 </div>
//
//                 <button className="form__button"
//                         type="submit">
//                     Sign In
//                 </button>
//
//                 <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
//
//             </form>
//         </body>
// );