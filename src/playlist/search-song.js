import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findSongByNameLocalThunk} from "../music_search/music-thunks";
import { searchForSongsSpotifyThunk } from "../music_search/music-thunks";
import { addSongToPlaylistThunk } from "./playlist-thunks";
import React from "react";
import { Link } from "react-router-dom";
const SongSearch = () => {
    const [searchTerm, setSearchTerm] = useState('nothingnow')
    const {local_tracks} = useSelector((state) => state.tracks)
    const {spotify_tracks} = useSelector((state) => state.tracks)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(findSongByNameLocalThunk(searchTerm))
    // }, [])
    console.log(spotify_tracks)
    return (
        <>
            <h1>Search for Songs</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findSongByNameLocalThunk(searchTerm))
                            dispatch(searchForSongsSpotifyThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {
                    local_tracks.data && local_tracks.data.map((track, index) =>
                        <li key={track._id} className="list-group-item">
                            <div className="row">
                                <div className="col-1">
                                    {index + 1}
                                </div>
                                <div className="col-9">
                                    <div>
                                        Track Name: {track.track_name}
                                    </div>
                                    <div>
                                        Artist Name: {track.artist_name}    
                                    </div>
                                    <div>
                                        Genre: {track.genre}    
                                    </div>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary float-end" onClick={() => {
                                            }}>
                                        Add To Playlist
                                    </button>
                                </div>
                            </div>
                            
                        </li>
                    )
                }
                
                {
                    spotify_tracks && spotify_tracks.map((track, index) =>
                        <li key={track.id} className="list-group-item">
                                <div>
                                    name: {track.name}
                                </div>
                                <div>
                                    artist: {track.artists[0].name}
                                </div>
                                
                        </li>
                    )
                }
            </ul>
            <pre>

            </pre>


        </>
    )
}

export default SongSearch;