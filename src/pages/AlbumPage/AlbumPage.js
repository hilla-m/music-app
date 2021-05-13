import React from 'react';
import { ListGroup, Row, Spinner, Table, Button } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router';
import './AlbumPage.css';
import { FaPlay, FaPause, FaPlus, FaPauseCircle , FaPlayCircle , FaPlusCircle} from "react-icons/fa";
import { useState } from 'react';


function AlbumPage({ activeUser, albums, tracks, artists }) {
    const { index } = useParams();
    const currentalbum = albums[index];
    const currentArtist = artists.find(artist => artist.id === currentalbum.artistId);
    const [showPlayLogo, setShowPlayLogo] = useState(true);

    let playLogo;

        if (!activeUser) {
        return <Redirect to="/" />
    }

    if (showPlayLogo) {
        playLogo = <FaPlayCircle />;
    } else {
        playLogo = <FaPauseCircle />;
    }


    const albumTracks = tracks.filter(track => track.albumId === currentalbum.id);

    //track num
    let i = 1;

    return (
        <div className="p-album">
            <div className="album-row">
                <div className="album-details">
                    <h1>{currentalbum.title}</h1>
                    <p>{currentArtist.name}</p>
                    <p>{currentalbum.year}</p>
                    <p>{currentalbum.genre}</p>
                </div>
                <div className="album-img">
                    <img src={currentalbum.image} />
                </div>
            </div>

            {albumTracks.length > 0 ?
                <div className="album-row">
                    <h4>Track Listing</h4>
                    <div className="album-tracks">

                        <Table striped bordered hover size="sm" variant="dark">
                            <tbody>
                                {albumTracks.map(track =>
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{track.title}</td>
                                        <td>{track.length}</td>
                                        <td className="td-btn"><a className="tracks-btn" onClick={() => setShowPlayLogo(!showPlayLogo)}>{playLogo}</a></td>
                                        <td className="td-btn"><a className="tracks-btn" ><FaPlusCircle/></a></td>

                                    </tr>)}
                            </tbody>
                        </Table>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default AlbumPage;