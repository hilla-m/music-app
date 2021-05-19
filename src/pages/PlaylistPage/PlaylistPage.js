import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaMinusCircle, FaPauseCircle, FaPlayCircle, FaPlusCircle, FaRegEdit } from 'react-icons/fa';
import './PlaylistPage.css';
import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import NamePlaylistModal from '../../components/NamePlaylistModal/NamePlaylistModal';

function PlaylistPage({ activeUser, playlists, tracks, handlePlayTrack, onEditPlaylist}) {

    const { index } = useParams();
    const currentPlaylist = playlists[index - 1];
    const[showNamePlaylistModal, setShowNamePlaylistModal] = useState(false);

    if (!activeUser) {
        return <Redirect to="/" />
    }

    const currentTracks = tracks.filter(track => currentPlaylist.tracksId.includes(track.id));

    let i = 1;
    let currentTrack;

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

    function addToPlaylist() {
        // debugger;
        return <Redirect to="/" />
    }

    return (
        <div className="p-playlist">
            {/* {currentPlaylist ? */}
            <div className="icons-btn">
                <FaPlayCircle className="icon-btn"/>
                <FaPlusCircle className="icon-btn" onClick={addToPlaylist}/>
                <FaMinusCircle className="icon-btn"/>
                <FaRegEdit className="icon-btn" onClick={() => setShowNamePlaylistModal(true)}/>
            </div>
            <h1>{currentPlaylist.title}</h1>
            {/* : null} */}
            {currentTracks.length > 0 ?
                <div className="playlist-tbl">
                    <Table striped bordered hover size="sm" variant="dark">
                        <tbody>
                            {currentTracks.map(track =>
                                <tr>
                                    <td>{i++}</td>
                                    <td>{track.title}</td>
                                    <td>{track.length}</td>
                                    <td className="td-btn"><a className="tracks-btn" onClick={() => playTrack(track.id, !track.play)}>{!track.play ? <FaPlayCircle /> : <FaPauseCircle />}</a></td>
                                    <td className="td-btn"><a className="tracks-btn" ><FaMinusCircle /></a></td>

                                </tr>)}
                        </tbody>
                    </Table>
                </div>
                : null}

            {currentTracks.length > 0 ?
                <Player
                    trackList={currentTracks}
                    includeTags={true}
                    includeSearch={false}
                    showPlaylist={true}
                    autoPlayNextTrack={true} />
                : null}
                 <NamePlaylistModal show={showNamePlaylistModal} onClose={() => setShowNamePlaylistModal(false)} onEdit={onEditPlaylist} playlist={currentPlaylist}/>
        </div>
    );
}

export default PlaylistPage;