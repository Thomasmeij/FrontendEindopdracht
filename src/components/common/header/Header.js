import React from "react";
import Navbar from "../navbar/Navbar";
import "./Header.css"
import logo from "../navbar/img/netflix-logo-zwart.png";

function Header () {

    return (
        <div className="header">
            <section className="header-logo">
                <a href={"/"} className="logo">
                    <img src={logo} alt="Netflix Logo" />
                </a>
            </section>
            <section className="navbar">
               <Navbar />
            </section>
        </div>
    )
}

export default Header;