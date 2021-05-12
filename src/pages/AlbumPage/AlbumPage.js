import React from 'react';
import { ListGroup, Row, Spinner } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router';
import './AlbumPage.css';

function AlbumPage({ activeUser, albums, tracks}) {
    const {index} = useParams();
    const currentalbum = albums[index];

    if (!activeUser) {
        return <Redirect to="/" />
    }

      const albumTracks = tracks.filter(track => track.albumId === currentalbum.id);

    return (
        <div className="p-album">
            <div className="album-row">
                <div className="album-details">
                    <h1>{currentalbum.title}</h1>
                    <p>{currentalbum.artistId}</p>
                    <p>{currentalbum.year}</p>
                    <p>{currentalbum.genre}</p>
                </div>
                <div className="album-img">
                    <img src={currentalbum.image} />
                </div>
            </div>
            <div className="album-row">
                <h3>Track Listing</h3>
                <div className="album-tracks">
                {/* {albumTracks.length > 0 ? */}
                    
                        {albumTracks.map(track => <ListGroup horizontal>
                             <ListGroup.Item>{track.title}</ListGroup.Item> 
                             <ListGroup.Item>{track.length}</ListGroup.Item>
                             </ListGroup> )}
                   
                {/* : null } */}
                </div>

            </div>
        </div>
    );
}

export default AlbumPage;