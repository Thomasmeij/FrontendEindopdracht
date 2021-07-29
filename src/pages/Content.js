
import React, { useState } from "react"
import {Link, useHistory} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {Banner, Navbar, Row} from "../components/common";
import request from "../request";
import "./Content.css"

function Content() {
    const [error, setError] = useState();
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout(){
        setError(" ")

        try{
            const response = await logout();
            history.push("/login")
            console.log(response);
        } catch {
            setError("Failed to logout")
        }
    }

    return(
        <>
            <h2>Profile</h2>
            {error}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile">
                Update Profile
            </Link>

            <div className="content">
                <Navbar />
                <Banner />
                <Row title= "Trending"
                     fetchUrl={request.fetchTrending}
                     isLargeRow />
                <Row title= "Popular" fetchUrl={request.fetchPopular} />
                <Row title= "Top Rated" fetchUrl={request.fetchTopRated} />
                <Row title= "Action Movies" fetchUrl={request.fetchActionMovies} />
            </div>

            <button onClick={handleLogout}
                    className="login__sign-in"
                    type="submit">
                Log Out
            </button>
        </>
    )
}

export default Content;