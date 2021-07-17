import React, {useContext} from 'react';
import {Link, Switch} from 'react-router-dom';
import {Banner, Navbar, Row} from "../components/common";
import request from "../request";

function Home() {

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
    );
}

export default Home;