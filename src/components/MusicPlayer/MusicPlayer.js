import React, { useState } from 'react';
import './MusicPlayer.css';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";


function MusicPlayer(track, play) {
    // const [play, setPlay] = useState(true);
    const [time, setTime] = useState(0);


    return (
        <div className="c-player">
            <h5>track.title</h5>
            <FaStepBackward className="btn-backward" />
            {play ?
                <FaPlay className="btn-play" />
                :
                <FaPause className="btn-pause" />
            }
            <FaStepForward className="btn-forward" />

        </div>
    );
}

export default MusicPlayer;