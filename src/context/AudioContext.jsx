import { createContext, useState, useEffect } from "react";
import trackList from "../assets/trackList";

const defaultTrack = trackList[0];
const audio = new Audio(defaultTrack.src);

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {

    const [currentTrack, setCurrenttrack] = useState(defaultTrack)
    const [isPlaying, setPlaying] = useState(false)


    const handleToggleAudio = (track) => {
        if (currentTrack.id !== track.id) {
            setCurrenttrack(track)
            setPlaying(true)

            audio.src = track.src;
            audio.currentTime = 0;
            audio.play();

            return;
        }
        if (isPlaying) {
            audio.pause();
            setPlaying(false)
        }
        else {
            audio.play()
            setPlaying(true)
        }
    }

    const value = { audio, currentTrack, isPlaying, setPlaying, handleToggleAudio }

    return (
        <AudioContext.Provider value={value}>
            {children}
        </AudioContext.Provider>
    )
}

export default AudioProvider;