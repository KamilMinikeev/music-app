import React, { useState } from 'react'
import trackList from '../../assets/trackList.js'
import Track from '../../components/Track/Track.jsx'
import { Input } from '@mui/material'

import style from "./mainPage.module.scss"

const MainPage = () => {

    const [tracks, setTracks] = useState(trackList);
    const [query, setQuery] = useState("");

    const searchChange = (event) => {
        setQuery(event.target.value)
        const foundTracks = filterSearch(event.target.value)
        setTracks(foundTracks)
    }

    const filterSearch = (query) => {
        if (!query) {
            return trackList
        }
        const lowerCaseQuery = query.toLowerCase();

        return trackList.filter(
            (track) =>
                track.title.toLowerCase().includes(lowerCaseQuery) || track.artists.toLowerCase().includes(lowerCaseQuery)
        )
    }

    return (
        <div className={style.search}>
            <Input onChange={searchChange} value={query} className={style.input} placeholder='Поик треков' />

            <div className={style.list}>
                {
                    tracks.map((track) => <Track key={track.id} {...track} />)
                }
            </div>

        </div>

    )

}


export default MainPage;
