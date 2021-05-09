import React from 'react';
import { Redirect } from 'react-router';

function AlbumPage({activeUser}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }
    return (
        <div>
            AlbumPage
        </div>
    );
}

export default AlbumPage;