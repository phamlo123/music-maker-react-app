import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createPlaylistThunk, findPlaylistByUserThunk} from "./playlist-thunks";
import React from "react";
import PlaylistSummaryItem from "./playlist-summary-item";
import { useLocation } from "react-router";
const PlaylistsInProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {userPlaylists} = useSelector((state) => state.playlists)
    const [playlist, setPlaylist] = useState({name: 'New Playlist'})
    const dispatch = useDispatch()
    const path = useLocation().pathname;
    const parts = path.split("/")
    let uid;
    if (path.includes("profile/")) {
        uid = parts[parts.length-1]
    } else {
        uid = currentUser._id
    }

    
    useEffect(() => {
        dispatch(findPlaylistByUserThunk(uid))
    }, [])
    return(
        <>
            <h1 className="pt-3">Playlists</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    { currentUser &&
                        <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createPlaylistThunk(
                            {
                                name: playlist.name,
                                owner: currentUser,
                            }))
                    }}>Create</button>
                    }                    
                    <input
                        className="form-control w-75"
                        onChange={(e) =>
                            setPlaylist({...playlist, name: e.target.value})}
                        value={playlist.name}/>
                </li>
                {
                    userPlaylists.map((playlist) =>
                        <PlaylistSummaryItem key={playlist._id} playlist={playlist}/>
                    )
                }


            </ul>
        </>
    )
}

export default PlaylistsInProfile;