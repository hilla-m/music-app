import React from 'react';
import { ListGroup, Row, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './AlbumPage.css';

function AlbumPage({ activeUser, album, tracks}) {
    if (!activeUser) {
        return <Redirect to="/" />
    }

    // const albumTracks = tracks.filter(track => track.albumId === album.id);

    return (
        <div className="p-album">
            <div className="album-row">
                <div className="album-details">
                    <h1>album.title</h1>
                    <p>album.artistId</p>
                    <p>album.year</p>
                    <p>album.genre</p>
                </div>
                <div className="album-img">
                    <img src="music-logo.jpg" />
                </div>
            </div>
            <div className="album-row">
                <h3>Track Listing</h3>
                {/* <div className="album-tracks">
                {albumTracks ?
                    <ListGroup>
                        {albumTracks.map(track =>  <ListGroup.Item>{track.title} {track.length}</ListGroup.Item>)}
                    </ListGroup> :
                    <Spinner animation="border" />
                }
                </div> */}
                
            </div>
        </div>
    );
}

export default AlbumPage;