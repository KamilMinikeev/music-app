import React, { useContext } from 'react'
import style from "./track.module.scss"

import { IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

import secondsToMMSS from "../../utils/secondsToMMSS.js"
import { AudioContext } from '../../context/AudioContext.jsx';

import cn from "classnames";

const Track = (track) => {
    const { id, src, preview, title, artists, duration } = track;
    const formattedDuration = secondsToMMSS(duration)
    const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext)

    const isCurrentTrack = currentTrack.id === track.id;

    return (
        <div className={cn(style.track, isCurrentTrack && style.playing)}>
            <IconButton onClick={() => { handleToggleAudio(track) }} >
                {
                    isCurrentTrack && isPlaying ? <Pause />
                        : <PlayArrow />

                }

            </IconButton>
            <img className={style.preview} src={preview} alt="" />
            <div className={style.redits}>
                <b>{title}</b>
                <p>{artists}</p>
            </div>
            <p className={style.duration}>{formattedDuration}</p>

        </div>
    )
}

export default Track;
