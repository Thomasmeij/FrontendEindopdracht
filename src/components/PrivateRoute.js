
import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";


//a wrapper around the route to check if we have the current user
//if we have a currentuser we render out all the components
//and if we dont we redirect the user to the Homepage

function PrivateRoute({ component: Component, ...rest}) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render = {props => {
                return currentUser ? <Component {...props} />
                    :
                    <Redirect to="/home"/>
            }}>

        </Route>
    );
}

export default PrivateRoute;