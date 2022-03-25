import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import "./Navbar.css"
import logo from "./img/netflix-logo-zwart.png"
import {useAuth} from "../../../contexts/AuthContext";

function Navbar () {
    const history = useHistory();
    const { currentUser, logout } = useAuth();
    const [show, handleShow] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <nav className={`navBar ${show && "nav__black"}`}>
            <section>
                <img className="nav__logo"
                    src= {logo}
                    alt= "netflix-logo" />
            </section>

            <div className="nav__buttons">
                {!currentUser ?
                    <>
                        <button className="nav__button"
                                type="button"
                                onClick={() => history.push('/login')}>
                            Log in
                        </button>
                        <button className="nav__button"
                                type="button"
                                onClick={() => history.push('/signup')}>
                            Registreren
                        </button>
                    </>
                    :
                    <button className="nav__button"
                            type="button"
                            onClick={logout}>
                        Log uit
                    </button>
                }
            </div>

        </nav>
    )
}

export default Navbar;