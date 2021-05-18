import React from 'react';
import { ListGroup, Row, Spinner, Table, Button } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router';
import './AlbumPage.css';
import { FaPlay, FaPause, FaPlus, FaPauseCircle, FaPlayCircle, FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'


function AlbumPage({ activeUser, albums, tracks, artists, handlePlayTrack }) {
    const { index } = useParams();
    const currentalbum = albums[index];
    const currentArtist = artists.find(artist => artist.id === currentalbum.artistId);

    if (!activeUser) {
        return <Redirect to="/" />
    }

    const albumTracks = tracks.filter(track => track.albumId === currentalbum.id);

    //track num
    let i = 1;

    let currentTrack ; //= tracks[0]

    function playTrack(id, value) {

        handlePlayTrack(id, value);

        //play / pause track
        currentTrack = tracks.find(track => track.id === id);
        let audioObj = new Audio(currentTrack.file);
        if (currentTrack.play) {
            audioObj.play();
        } else {
            audioObj.pause(); //not working
        }
    }

    return (
        <div className="p-album">
            <div className="album-row">
                <div className="album-details">
                    <h1>{currentalbum.title}</h1>
                    <h3>{currentArtist.name}</h3>
                    <h5>{currentalbum.year}</h5>
                    <h5>{currentalbum.genre}</h5>
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
                                        <td className="td-btn"><a className="tracks-btn" onClick={() => playTrack(track.id, !track.play)}>{!track.play ? <FaPlayCircle /> : <FaPauseCircle />}</a></td>
                                        <td className="td-btn"><a className="tracks-btn" ><FaPlusCircle /></a></td>

                                    </tr>)}
                            </tbody>
                        </Table>

                    </div>
                </div>
                : null}

                {/* <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls/> */}

                 {currentTrack ? 
                    <Player trackList={currentTrack}
                    includeTags={false}
                    includeSearch={false}
                    showPlaylist={true}
                    autoPlayNextTrack={true}/>
                    : null}
        </div>
    );
}

export default AlbumPage;