import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import './ArtistPage.css';

function ArtistPage({ activeUser , artists, albums}) {

    const { index } = useParams();
    const currentArtist = artists[index];
    const artistAlbums = albums.filter( album => album.artistId === currentArtist.id);

    if (!activeUser) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <div className="p-artist">
                <div className="artist">
                    <h1>{currentArtist.name}</h1>
                    <img className="artist-img" src={currentArtist.image} />
                </div>
                <div className="artist-albums">
                {artistAlbums.length > 0 ?
                    <Row>
                        {artistAlbums.map(album => <Col sm={6} md={2} > <AlbumCard album={album} artist={currentArtist}/></Col>)}
                    </Row> :
                    null
                }
                </div>
            </div>
        </div>
    );
}

export default ArtistPage;