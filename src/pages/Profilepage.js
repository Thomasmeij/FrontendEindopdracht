import React, { useContext, useState, useEffect } from 'react';
import { authContext } from "../context/Authcontext";
import axios from "axios";
import {Banner, Navbar, Row} from "../components/common";
import request from "../request";

function Profile() {
    const {authState: {user},} = useContext(authContext);
    const [content, setContent] = useState(null);
    //console.log("gebruikers data uit authcontext: ", user);

    useEffect(() => {
        async function fetchDataProfile() {
            console.log("Fetch data in profile: ");
            try {
                const token = localStorage.getItem("token");
                console.log("JWT: ", token);
                const response = await
                    axios.get("http://localhost:3000/660/private-content",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                setContent(response.data);
            } catch (e) {

            }
        }

        fetchDataProfile();
    }, []);

    //console.log("wat is de content: ", content);

    return (
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

export default Profile;
