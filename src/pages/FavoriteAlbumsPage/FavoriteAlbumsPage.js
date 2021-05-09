import React from 'react';
import { Redirect } from 'react-router';

function FavoriteAlbumsPage({activeUser}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }
    return (
        <div>
            FavoriteAlbumsPage
        </div>
    );
}

export default FavoriteAlbumsPage;