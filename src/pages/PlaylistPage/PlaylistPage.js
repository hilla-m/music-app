import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaMinusCircle, FaPauseCircle, FaPlayCircle, FaPlusCircle, FaRegEdit } from 'react-icons/fa';
import './PlaylistPage.css';
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import NamePlaylistModal from '../../components/NamePlaylistModal/NamePlaylistModal';
import audio3 from './On The Run.mp3';
import RemoveTrackModal from '../../components/RemoveTrackModal/RemoveTrackModal';
import RemovePlaylistModal from '../../components/RemovePlaylistModal/RemovePlaylistModal';
import AddTrackToPlaylistModal from '../../components/AddTrackToPlaylistModal/AddTrackToPlaylistModal';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Player from '@madzadev/audio-player';
import '@madzadev/audio-player/dist/index.css';

function PlaylistPage({ activeUser, playlists, tracks, handlePlayTrack, onEditPlaylist, onRemoveTrack, onRemovePlaylist }) {

    const { index } = useParams();
    const currentPlaylist = playlists[index - 1];
    const [showNamePlaylistModal, setShowNamePlaylistModal] = useState(false);
    const [trackPlay, setTrackPlay] = useState(null);
    const [showRemoveTrackModal, setShowRemoveTrackModal] = useState(false);
    const [trackRemove, setTrackRemove] = useState(null);
    const [showRemovePlaylistModal, setShowRemovePlaylistModal] = useState(false);
    const [redirectToHome, setRedirectToHome] = useState(false);

    useEffect(() => {
        if (trackPlay) {
            const audioUrl = process.env.PUBLIC_URL + trackPlay.file;
            const audioObj = new Audio(audioUrl);
            audioObj.play();

            return () => {
                audioObj.pause();
            }
        }
    }, [trackPlay])


    const currentTracks = tracks.filter(track => currentPlaylist.tracksId.includes(track.id));

    let i = 1;
    let currentTrack;

    function playTrack(id, value) {
        if (value) {
            setTrackPlay(tracks.find(track => track.id === id));
        } else {
            setTrackPlay(null);
        }
    }

    function handleOnClick(track) {
        setShowRemoveTrackModal(true);
        setTrackRemove(track);
    }

    if (!activeUser) {
        return <Redirect to="/" />
    }

    if (redirectToHome) {
        return <Redirect to="/home" />
    }

    return (
        <div className="p-playlist">
            {/* {currentPlaylist ? */}
            <div className="icons-btn">
                <FaPlayCircle className="icon-btn" />
                <FaPlusCircle className="icon-btn" onClick={() => setRedirectToHome(true)} />
                <FaMinusCircle className="icon-btn" onClick={() => setShowRemovePlaylistModal(true)} />
                <FaRegEdit className="icon-btn" onClick={() => setShowNamePlaylistModal(true)} />
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
                                    {/* <td className="td-btn"><a className="tracks-btn" onClick={() => playTrack(track.id, !(trackPlay && trackPlay.id === track.id))}>
                                        {trackPlay && trackPlay.id === track.id ? <FaPauseCircle /> : <FaPlayCircle />}</a></td> */}
                                    <td className="td-btn"><a className="tracks-btn" onClick={() => handleOnClick(track)}><FaMinusCircle /></a></td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
                : null}


            {currentTracks.length > 0 ?
                <Player trackList={currentTracks}
                    includeTags={true}
                    includeSearch={false}
                    showPlaylist={false}
                    autoPlayNextTrack={true} />
                : null}

            {/* <AudioPlayer
                src={audio3}
            /> */}

            <NamePlaylistModal show={showNamePlaylistModal} onClose={() => setShowNamePlaylistModal(false)} onEdit={onEditPlaylist} playlist={currentPlaylist} />
            <RemoveTrackModal show={showRemoveTrackModal} onClose={() => setShowRemoveTrackModal(false)} onRemove={onRemoveTrack} playlist={currentPlaylist} track={trackRemove} />
            <RemovePlaylistModal show={showRemovePlaylistModal} onClose={() => setShowRemovePlaylistModal(false)} onRemove={onRemovePlaylist} playlist={currentPlaylist} />
        </div>
    );
}

export default PlaylistPage;