/* eslint-disable */
import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { findPlaylistByIdThunk } from "./playlist-thunks";
import { removeSongFromPlaylistThunk } from "./playlist-thunks";
import React from "react";
import SongSearch from "./search-song";
const PlaylistDetail = () => {
    const {pid} = useParams()
    const {currentPlaylist} = useSelector((state) => state.playlists)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findPlaylistByIdThunk(pid))
    }, [pid])
    return(
        <>
            <div>
                <h2>{currentPlaylist && currentPlaylist.name}</h2> 
            </div>
            <ul className="list-group">
                Tracks:
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
                        <div className="col-2">
                            {   currentPlaylist && currentUser && currentUser.username === currentPlaylist.owner.username && 
                                <button className="btn btn-primary float-end" onClick={() => {
                                    let params = {pid: currentPlaylist._id, song: song._id}
                                    dispatch(removeSongFromPlaylistThunk(params))
                                }}>
                                    Remove from Playlist
                                </button>
                            }

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