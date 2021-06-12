import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import './FavoriteArtistsPage.css';

function FavoriteArtistsPage({activeUser , artists}) {
    if(!activeUser){
        return <Redirect to="/"/>
    }

    const favArtists = artists.filter(artist => activeUser.artists.indexOf(artist.id) !== -1);

    return (
        <div className="p-fav-artists">
        <h1>My Favorite Artists</h1>
        {favArtists.length > 0 ?
            <Row>
                {favArtists.map(artist => <Col sm={6} md={2} > <ArtistCard artist={artist}/> </Col>)}
            </Row> :
            null
        }
    </div>
    );
}

export default FavoriteArtistsPage;