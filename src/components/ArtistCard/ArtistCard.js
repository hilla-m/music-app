import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ArtistCard.css';

function ArtistCard({artist}) {

    const artistIndex = artist.Id - 1;

    return (
        <Card className="artist-card">
            <Card.Img className="artist-img" variant="top" src={artist.image} />
            <Card.Body>
                <Card.Title>
                    <Link to={"/artist/" + artistIndex} className="artist-link"> {artist.name}</Link>
                </Card.Title>
            </Card.Body>
        </Card>
    );
}

export default ArtistCard;