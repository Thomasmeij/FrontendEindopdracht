import React from "react";
import { useHistory } from 'react-router-dom';
import "./Navbar.css"
import logo from "./img/netflix-logo-zwart.png"

function Navbar () {
    const history = useHistory();

    return (
        <nav className="navBar">
            <section>
                <img className="nav__logo"
                    src= {logo}
                    alt= "netflix-logo" />
            </section>

            {/*@Todo avatar-logo ipv buttons */}
            <div className="nav__buttons">
                <button className="nav__button"
                    type="button"
                    onClick={() => history.push('/signin')}>
                    Log in
                </button>
                <button className="nav__button"
                        type="button"
                        onClick={() => history.push('/signup')}>
                    Registreren
                </button>
                {/* <button className="nav__button"*/}
                {/*         type="button"*/}
                {/*         onClick={() => history.push('/')}>*/}
                {/*Log uit*/}
                {/*  </button>*/}
            </div>

        </nav>
    )
}

export default Navbar;