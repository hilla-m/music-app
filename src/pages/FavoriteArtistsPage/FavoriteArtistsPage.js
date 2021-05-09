import React from 'react';
import { Redirect } from 'react-router';

function FavoriteArtistsPage({activeUser}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }
    return (
        <div>
            FavoriteArtistsPage
        </div>
    );
}

export default FavoriteArtistsPage;