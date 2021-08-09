import React from "react"
import {Navbar} from "../components/common";
import "./Home.css"
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    return (
        <>
            <Navbar />
            <div className="main">
                <div className="area__title">
                    <h1>Unlimited films, TV </h1>
                    <h1>Programmes and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <h6>Ready to watch? Enter your email to create or restart your membership</h6>

                    <div className="search">
                        <input type="text" className="home__input" placeholder="Email address">
                        </input>

                        <button className="home__button"
                                type="button"
                                onClick={() => history.push('/signup')}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;