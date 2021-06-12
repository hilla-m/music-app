import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaHeart , FaRegHeart} from 'react-icons/fa';
import { Redirect, useParams } from 'react-router';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import './ArtistPage.css';

function ArtistPage({ activeUser, artists, albums, onEditFav }) {

    const { index } = useParams();
    const currentArtist = artists[index];
    const artistAlbums = albums.filter(album => album.artistId === currentArtist.id);

    //checking if the artist is in the favorites artists list
    const favArtist = activeUser.artists.find(artistid => artistid === currentArtist.id);

    if (!activeUser) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <div className="p-artist">
                <div className="artist">
                    <h1>{currentArtist.name}</h1>
                    <img className="artist-img" src={currentArtist.image} />
                    {favArtist ?
                        <FaHeart className="heart" onClick={() => onEditFav(currentArtist.id, false)} />
                        :
                        <FaRegHeart className="reg-heart" onClick={() => onEditFav(currentArtist.id, true)} />
                    }
                </div>
                <div className="artist-albums">
                    {artistAlbums.length > 0 ?
                        <Row>
                            {artistAlbums.map(album => <Col sm={6} md={2} > <AlbumCard album={album} artist={currentArtist} /></Col>)}
                        </Row> :
                        null
                    }
                </div>
            </div>
        </div>
    );
}

export default ArtistPage;