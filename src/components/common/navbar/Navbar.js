import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import "./Navbar.css"
import logo from "./img/netflix-logo-zwart.png"
import { authContext } from "../../../context/Authcontext";

function Navbar () {
    const history = useHistory();
    const { logout, authState: {user } } = useContext(authContext);

    return (
        <nav className="navBar">
            <section>
                <img className="nav__logo"
                    src= {logo}
                    alt= "netflix-logo" />
            </section>

            {/*@Todo avatar-logo ipv buttons */}
                <div className="nav__buttons">
                    {!user ?
                        <>
                            <button className="nav__button"
                                    type="button"
                                    onClick={() => history.push('/signIn')}>
                                Log in
                            </button>
                            <button className="nav__button"
                                    type="button"
                                    onClick={() => history.push('/signUp')}>
                                Register
                            </button>
                        </>
                        :
                        <button className="nav__button"
                                type="button"
                                onClick={logout}>
                            Log out
                        </button>
                    }
                </div>

        </nav>
    )
}

export default Navbar;