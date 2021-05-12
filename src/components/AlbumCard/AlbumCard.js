import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './AlbumCard.css';
import AlbumPage from '../../pages/AlbumPage/AlbumPage';
import ArtistPage from '../../pages/ArtistPage/ArtistPage';


function AlbumCard({ album , artist}) {
    
    const index= album.id-1;

    //     if (index !== undefined) {
    //     return <Redirect to={'/album/' + index}/>
    // }

    return (
        <Card className="album-card">
            <Card.Img className="album-img" variant="top" src={album.image} />
            <Card.Body>
                <Card.Title>
                    <Link to={"/album/" + index} className="album-link">{album.title}</Link>
                </Card.Title>
                <Card.Text> 
                    <Link to={"/artist/" + artist.id} className="artist-link"> {artist.name}</Link>  
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AlbumCard;