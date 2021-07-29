import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase"

const AuthContext = React.createContext({});

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut();
    }

    //the verification if the state is changed
    //We dont render any of the application untill the user has been set
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}