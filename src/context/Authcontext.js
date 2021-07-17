import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router-dom"
// import {set} from "react-hook-form";

export const authContext = createContext({});

function AuthContextProvider(props){
    const history = useHistory();
    const [ authState, setAuthState] = useState(
        {user: null, status: "pending",});

    useEffect(() => {
        //@Todo Automatic login when the user has a token
        // setTimeout(() => setAuthState({user: null , status: "done"}),2000);
        const token = localStorage.getItem("token");

        if(token){
            login(token);
        } else {
            setAuthState({user: null , status: "done"});
            history.push("/signIn");
        }

    }, [] );

    async function getUserData(id, token){
        //const token = localStorage.getItem("token");
        setAuthState({ user: null, status: "pending" });

        try{
            const response = await axios.get(`http://localhost:3000/600/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setAuthState({user: response.data, status: "done"});
            history.push('/Profile');
            console.log("User data: .." , response);
        }catch (e) {
            console.log("something went wrong!")
        }
    }

    async function login(token) {
        //@todo
        localStorage.setItem("token" , token);
        // console.log("hebben we een token? ", token);
        const dataFromToken = jwt_decode(token);
        // console.log("wat zit in de token? : ", dataFromToken.sub);
        const userId = dataFromToken.sub;
        await getUserData(userId, token);
    }
    function logout(){
        //@todo
        localStorage.removeItem("token");
        setAuthState({user: null, status: "done"});
        history.push("/signIn");
    }

    //deze data maken we beschikbaar in de context
    const data = { authState: authState, login: login , logout: logout };

    return (
        <authContext.Provider value={data}>
            {/*hier komt de rest van de app*/}
            {authState.status === "pending" && <h1>Fetching your Data!</h1>}
            {authState.status === "done" && props.children}
        </authContext.Provider>
    );
}

export default AuthContextProvider;
