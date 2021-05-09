import React from 'react';
import { Redirect } from 'react-router';

function SearchingPage({activeUser}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }
    return (
        <div>
            SearchingPage
        </div>
    );
}

export default SearchingPage;