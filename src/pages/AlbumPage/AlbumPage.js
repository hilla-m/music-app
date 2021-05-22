import React, { useEffect } from 'react';
import { ListGroup, Row, Spinner, Table, Button } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router';
import './AlbumPage.css';
import { FaPlay, FaPause, FaPlus, FaPauseCircle, FaPlayCircle, FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
import Player from '@madzadev/audio-player';
import '@madzadev/audio-player/dist/index.css';
import audio1 from './Speak To MeBreathe.mp3';
import audio2 from './Speak To MeBreathe.mp3';
import audio3 from './On The Run.mp3';
import AddTrackToPlaylistModal from '../../components/AddTrackToPlaylistModal/AddTrackToPlaylistModal';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';

function AlbumPage({ activeUser, albums, tracks, artists, playlists, handlePlayTrack, addTrack }) {
    const { index } = useParams();
    const [trackPlay, setTrackPlay] = useState(null);
    const [showAddTrackModal, setShowAddTrackModal] = useState(false);
    const [trackAdd, setTrackAdd] = useState(null);
    // const [autoPlay, setAutoPlay] = useState(false);
    const [play, setPlay] = useState(true);

    const currentAlbum = albums[index];
    const currentArtist = artists.find(artist => artist.id === currentAlbum.artistId);

    const albumTracks = tracks.filter(track => track.albumId === currentAlbum.id);

    // const[trackList,setTrackList] = useState(albumTracks);

    useEffect(() => {
        if (trackPlay) {
            debugger;
            const audioUrl = trackPlay.file; //process.env.PUBLIC_URL + trackPlay.file;
            const audioObj = new Audio(audio3);
            audioObj.play();
            
            setPlay(true);
            // setTrackList(albumTracks.slice(trackPlay.id-1));

            return () => {
                audioObj.pause();
                setPlay(false);
                // setTrackList(albumTracks);
            }
        }
    }, [trackPlay])


    //track num
    let i = 1;

    // let currentTrack ; //= tracks[0]

    function playTrack(id, value) {
        if (value) {
            setTrackPlay(tracks.find(track => track.id === id));
        } else {
            setTrackPlay(null);
        }

        // handlePlayTrack(id, value);
        // //play / pause track
        // currentTrack = tracks.find(track => track.id === id);
        // let audioObj = new Audio(currentTrack.file);
        // if (currentTrack.play) {
        //     audioObj.play();
        // } else {
        //     audioObj.pause(); //not working
        // }
    }

    function handleAddTrack(track) {
        setShowAddTrackModal(true);
        setTrackAdd(track);
    }

    if (!activeUser) {
        return <Redirect to="/" />
    }


    return (
        <div className="p-album">
            <div className="album-row">
                <div className="album-details">
                    <h1>{currentAlbum.title}</h1>
                    <h3>{currentArtist.name}</h3>
                    <h5>{currentAlbum.year}</h5>
                    <h5>{currentAlbum.genre}</h5>
                </div>
                <div className="album-img">
                    <img src={currentAlbum.image} />
                </div>
            </div>

            {albumTracks.length > 0 ?
                <div className="album-row">
                    <h4>Track Listing</h4>
                    <div className="album-tracks">

                        <Table striped bordered hover size="sm" variant="dark">
                            <tbody>
                                {albumTracks.map(track =>
                                    <tr key={track.id}>
                                        <td>{i++}</td>
                                        <td>{track.title}</td>
                                        <td>{track.length}</td>
                                        <td className="td-btn">
                                            <a className="tracks-btn" onClick={() => playTrack(track.id, !(trackPlay && trackPlay.id === track.id))}>
                                                {trackPlay && trackPlay.id === track.id ? <FaPauseCircle /> : <FaPlayCircle />}
                                            </a></td>
                                        <td className="td-btn"><FaPlusCircle className="tracks-btn" onClick={() => handleAddTrack(track)} /></td>

                                    </tr>)}
                            </tbody>
                        </Table>

                    </div>
                </div>
                : null}

            {/* {   trackPlay ? */}
                {/* <AudioPlayer
                    // autoPlay={autoPlay}
                    src={audio3}
                /> */}
                {/* <MusicPlayer track={trackPlay} play={play}/> */}
             {/* : null}  */}

            {/* {albumTracks.length > 0 ?
            <Player trackList={albumTracks}
                includeTags={true}
                includeSearch={false}
                showPlaylist={false}
                autoPlayNextTrack={true} />
            : null} */}

            <AddTrackToPlaylistModal show={showAddTrackModal} onClose={() => setShowAddTrackModal(false)} playlists={playlists} trackAdd={trackAdd} onAddTrack={addTrack} />

        </div>
    );
}

export default AlbumPage;