import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage"
import SignIn from "./pages/SignInPage";
import Register from "./pages/SignUpPage";


function App() {
  return (
      <Router>
        <div className="application">
            <Switch>
                <Route path="/signIn">
                    <SignIn/>
                </Route>
                <Route path="/signUp">
                    <Register/>
                </Route>
                <Route path="/">
                    <Homepage/>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;

