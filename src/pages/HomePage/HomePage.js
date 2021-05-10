import React from 'react';
import { useState } from 'react';
import { Col, Form, Row, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './HomePage.css';
import AlbumCard from '../../components/AlbumCard/AlbumCard';

function HomePage({ activeUser, albums, artists }) {
    const [filterText, setFilterText] = useState("");

    if (!activeUser) {
        return <Redirect to="/" />
    }

    const filteredAlbums = albums.filter(album => album.title.toLowerCase().includes(filterText.toLowerCase()));
    // || album.artistId  .includes(filterText.toLowerCase()))

    const albumsCards = filteredAlbums.map(album => <Col sm={6} md={2} > <AlbumCard album={album} /></Col>);

    return (
        <div className="p-home">
            <div className="home-search">
                <h1>Find your music</h1>
                <Form>
                    <Form.Control type="text" className="filter" placeholder="Search album" value={filterText} onChange={e => setFilterText(e.target.value)} />
                </Form>
            </div>
            <div className="album-cards">
                {albums ?
                    <Row>
                        {albumsCards}
                    </Row> :
                    <Spinner animation="border" />
                }
            </div>
        </div>
    );
}

export default HomePage;