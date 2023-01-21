import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { findPlaylistByIdThunk } from "./playlist-thunks";
import React from "react";
import SongSearch from "./search-song";
const PlaylistDetail = () => {
    const {pid} = useParams()
    const {currentPlaylist} = useSelector((state) => state.playlists)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findPlaylistByIdThunk(pid))
    }, [pid])
    return(
        <>
            <div>
                {currentPlaylist && currentPlaylist.name}
            </div>
            <ul className="list-group">
                {
                    currentPlaylist && currentPlaylist.songs.map((song) =>
                    <li key={song._id} className="list-group-item">
                        <div>
                            track name: {song.track_name}
                        </div>
                        <div>
                            artist: {song.artist_name}
                        </div>
                        <div>
                            duration: {song.duration_ms} ms
                        </div>
                        
                    </li>
                    )
                }
            </ul>
            <div>
                by {currentPlaylist && currentPlaylist.owner.username}
            </div>
            <SongSearch/>
        </>
    )
}

export default PlaylistDetail;