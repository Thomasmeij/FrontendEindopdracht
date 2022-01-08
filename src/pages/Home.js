import React from "react"
import {Navbar} from "../components/common";
import "./globalstyling/Home.css"
import { useHistory } from "react-router-dom";
import Footer from "../components/common/footer/Footer";

function Home() {
    const history = useHistory();

    return (
        <>
            <Navbar />
            <div className="main">
                <main className="area__title">
                    <h1>Unlimited films, TV Programmes and more.</h1>

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
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Home;