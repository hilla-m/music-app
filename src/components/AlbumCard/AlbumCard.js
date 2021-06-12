import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './AlbumCard.css';
import AlbumPage from '../../pages/AlbumPage/AlbumPage';
import ArtistPage from '../../pages/ArtistPage/ArtistPage';


function AlbumCard({ album , artist}) {

    const albumIndex = album.id-1;
    const artistIndex = artist.id-1;

    return (
        <Card className="album-card">
            <Card.Img className="album-img" variant="top" src={album.image} />
            <Card.Body>
                <Card.Title>
                    <Link to={"/album/" + albumIndex} className="album-link">{album.title}</Link>
                </Card.Title>
                <Card.Text> 
                    <Link to={"/artist/" + artistIndex} className="artist-link"> {artist.name}</Link>  
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AlbumCard;