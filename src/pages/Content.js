
import React from "react"
// import {Link, useHistory} from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import {Banner, Navbar, Row} from "../components/common";
import request from "../request";
import "./Content.css"

function Content() {
    // const [error, setError] = useState();
    // const { currentUser, logout } = useAuth();
    // const history = useHistory();
    //
    // async function handleLogout(){
    //     setError(" ")
    //
    //     try{
    //         const response = await logout();
    //         history.push("/login")
    //         console.log(response);
    //     } catch {
    //         setError("Failed to logout")
    //     }
    // }

    return(
        <>
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
        </>
    )
}

export default Content;