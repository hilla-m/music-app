import React from 'react';
import { Redirect } from 'react-router';

function ArtistPage({activeUser}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }
    return (
        <div>
            ArtistPage
        </div>
    );
}

export default ArtistPage;