import React from 'react';
import { Redirect } from 'react-router';

function LandingPage({activeUser}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }
    return (
        <div>
            LandingPage
        </div>
    );
}

export default LandingPage;