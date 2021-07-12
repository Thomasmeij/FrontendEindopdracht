import React from "react";
import { useHistory } from 'react-router-dom';
import "./Navbar.css"
import logo from "../header/img/netflix-logo.png"


function Navbar () {
    const history = useHistory();

    return (
        <nav>
            <button
                type="button"
                onClick={() => history.push('/signin')}
            >
                Log in
            </button>
            <button
                type="button"
                onClick={() => history.push('/signup')}
            >
                Registreren
            </button>
         <button
        type="button"
        onClick={() => history.push('/')}>
        Log uit
          </button>

        </nav>
    )
}

export default Navbar;