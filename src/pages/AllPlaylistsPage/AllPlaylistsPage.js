import React from 'react';
import { Redirect } from 'react-router';

function AllPlaylistsPage({activeUser}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }
    return (
        <div>
            AllPlaylistsPage
        </div>
    );
}

export default AllPlaylistsPage;