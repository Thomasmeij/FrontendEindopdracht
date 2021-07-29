import React, { useContext } from 'react';
import { Navbar } from "../components/common";
import { authContext } from "../context/Authcontext";

function Home() {
    const authData = useContext( authContext );

    return (
        <>
            <div className="content">
                <Navbar />
            </div>
        </>
    );
}

export default Home;