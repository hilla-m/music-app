import React from 'react';
import { Redirect } from 'react-router';

function HomePage({activeUser}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }
    return (
        <div>
            HomePage
        </div>
    );
}

export default HomePage;