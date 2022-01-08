
import React from "react"
import {Banner, Footer, Navbar, Row} from "../components/common";
import request from "../request";
import "./globalstyling/Content.css"

function Content() {

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
                <Row title= "Netflix Originals" fetchUrl={request.fetchNetflixOriginals} />
                <Row title= "Action Movies" fetchUrl={request.fetchActionMovies} />
                <Row title= "Comedy Movies" fetchUrl={request.fetchComedyMovies} />
                <Row title= "Horror Movies" fetchUrl={request.fetchHorrorMovies} />
                <Row title= "Documentaries" fetchUrl={request.fetchDocumentaries} />
                <Footer />
            </div>
        </>
    )
}

export default Content;
