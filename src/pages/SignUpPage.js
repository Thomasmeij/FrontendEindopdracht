import React ,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navbar } from "../components/common";
import "./SignUpPage.css"
import { useHistory } from "react-router-dom";
import axios from "axios";

function Register () {
    const { handleSubmit, register } = useForm();
    const [success, setSuccess] = useState(false);
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        console.log("data van de gebruiker: " , data);

        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3000/register",
                { email: data.email, username: data.username, password: data.password});

            console.log(response);
            setSuccess(true);
            setTimeout(() => history.push("/signIn"), 3000);

        } catch (error) {
            console.log("Something went wrong!: ", error)
        }
        setLoading(false);
    }

    return (
        <>
            <Navbar />
            <body>
            <p> {success && "Succesfull registration!"} </p>
            <p> {loading && "Fetching Data"} </p>

                <div className="login__content">

                    {!success && <form onSubmit={handleSubmit(onSubmit)}
                                      className="login">
                        <h1 className="login__title">Sign Up</h1>
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
                            <input className="login__group__input" placeholder="Username"
                                   type="text"
                                   {...register("username")}/>
                        </div>
                        <div className="login__group">
                            <label className="login__group__label">

                            </label>
                            <input className="login__group__input" placeholder="Password"
                                   type="password"
                                   {...register("password")}/>
                        </div>


                        <button className="login__sign-in"
                                type="submit"
                                disabled={loading}>
                            Register
                        </button>

                        <div className="login__uselessText">
                            <p className="login__text">Remember me</p>
                            <p className="login__text login__secondary-cta__text--need-help">
                                Need help?</p>
                        </div>
                    </form>
                    }
                </div>
            </body>
        </>
    )
}

export default Register;