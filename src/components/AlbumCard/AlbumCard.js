import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AlbumCard.css';
import AlbumPage from '../../pages/AlbumPage/AlbumPage';
import ArtistPage from '../../pages/ArtistPage/ArtistPage';


function AlbumCard({ album }) {

    return (
        <Card className="album-card">
            <Card.Img className="album-img" variant="top" src={album.image} />
            <Card.Body>
                <Card.Title>
                    <Link to="/album" params={album} className="album-link">{album.title}</Link>
                </Card.Title>
                <Card.Text> 
                    <Link to="/artist" className="artist-link"> {album.artistId}</Link>
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AlbumCard;