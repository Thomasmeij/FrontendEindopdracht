import React from "react";
import './App.css';
import { Header } from "./components/common"
import Row from "./Row";
import request from "./request";


function App() {
  return (
    <div className="content">
        <Header />
        <Row title= "Trending" fetchUrl={request.fetchTrending} />
        <Row title= "Popular" fetchUrl={request.fetchPopular} />

        {/*<Navbar />*/}
        {/*<Features />*/}
        {/*<Footer />*/}
    </div>
  );
}

export default App;
