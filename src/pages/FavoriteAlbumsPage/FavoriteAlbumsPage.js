import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { Redirect } from 'react-router';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import './FavoriteAlbumsPage.css';

function FavoriteAlbumsPage({ activeUser, albums, artists }) {
    if (!activeUser) {
        return <Redirect to="/" />
    }

    const favAlbums = albums.filter(album => activeUser.albums.indexOf(album.id) !== -1);

    return (
        <div className="p-fav-albums">
            <h1>My Favorite Albums</h1>
            {favAlbums.length > 0 ?
                <Row>
                    {favAlbums.map(album => <Col sm={6} md={2} > <AlbumCard album={album} artist={artists.find(artist => artist.id === album.artistId)} /> </Col>)}
                 
                </Row> :
                null
            }
        </div>
    );
}

export default FavoriteAlbumsPage;