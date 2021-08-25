import React from "react";
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home, Content, Login, Signup } from "../pages/index"
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

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

// {/*<Footer />*/}