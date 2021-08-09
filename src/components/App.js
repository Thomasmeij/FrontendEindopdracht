import React from "react";
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home"
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Content from "../pages/Content";

function App() {
  return (
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Content}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;

//default islargeRow = true


//        <Navbar />
//         <Banner />
//         <Row title= "Trending"
//              fetchUrl={request.fetchTrending}
//              isLargeRow />
//         <Row title= "Popular" fetchUrl={request.fetchPopular} />
//         <Row title= "Top Rated" fetchUrl={request.fetchTopRated} />
//         <Row title= "Action Movies" fetchUrl={request.fetchActionMovies} />
// {/*<Footer />*/}