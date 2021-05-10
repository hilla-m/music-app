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

    //albums by genre
    const rockAlbumsCards = filteredAlbums.filter(album => album.genre === "Rock");
    const popAlbumsCards = filteredAlbums.filter(album => album.genre === "Pop");
    const rbAlbumsCards = filteredAlbums.filter(album => album.genre === "R&B");
    const jazzAlbumsCards = filteredAlbums.filter(album => album.genre === "Jazz");


    // const albumsCards = filteredAlbums.map(album => <Col sm={6} md={2} > <AlbumCard album={album} /></Col>);

    return (
        <div className="p-home">
            <div className="home-search">
                <h1>Find your music</h1>
                <Form>
                    <Form.Control type="text" className="filter" placeholder="Search album" value={filterText} onChange={e => setFilterText(e.target.value)} />
                </Form>
            </div>
            <div className="albums-cards">
                {/* {albums ? */}
                {rockAlbumsCards ?
                    <Row>
                        <h4>Rock</h4>
                        {rockAlbumsCards.map(album => <Col sm={6} md={2} > <AlbumCard album={album} /></Col>)}
                        {/* {albumsCards} */}
                    </Row> :
                    <Spinner animation="border" />
                }
                {popAlbumsCards ?
                    <Row>
                        <h4>Pop</h4>
                        {popAlbumsCards.map(album => <Col sm={6} md={2} > <AlbumCard album={album} /></Col>)}
                    </Row> :
                    <Spinner animation="border" />
                }
                {rbAlbumsCards ?
                    <Row>
                        <h4>R&B</h4>
                        {rbAlbumsCards.map(album => <Col sm={6} md={2} > <AlbumCard album={album} /></Col>)}
                    </Row> :
                    <Spinner animation="border" />
                }
                 {jazzAlbumsCards ?
                    <Row>
                        <h4>Jazz</h4>
                        {jazzAlbumsCards.map(album => <Col sm={6} md={2} > <AlbumCard album={album} /></Col>)}
                    </Row> :
                    <Spinner animation="border" />
                }
            </div>
        </div>
    );
}

export default HomePage;