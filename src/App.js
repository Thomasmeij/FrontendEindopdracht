import React from "react";
import './App.css';
import { Header } from "./components/common"
import Row from "./Row";
import request from "./request";


function App() {
  return (
    <div className="content">
        <Header />
        <Row title= "Trending"
             fetchUrl={request.fetchTrending}
             isLargeRow />
        <Row title= "Popular" fetchUrl={request.fetchPopular} />
        <Row title= "Top Rated" fetchUrl={request.fetchTopRated} />
        <Row title= "Action Movies" fetchUrl={request.fetchActionMovies} />

        {/*<Navbar />*/}
        {/*<Features />*/}
        {/*<Footer />*/}
    </div>
  );
}

export default App;

//default islargeRow = true
