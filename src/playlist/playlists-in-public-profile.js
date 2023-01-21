/* eslint-disable */
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findPlaylistByUserThunk} from "./playlist-thunks";
import React from "react";
import PlaylistSummaryItem from "./playlist-summary-item";
import { useLocation } from "react-router";
const PlaylistsInPublicProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {userPlaylists} = useSelector((state) => state.playlists)
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
            <h1>Playlists</h1>
            <ul className="list-group">
                {
                    userPlaylists.map((playlist) =>
                        <PlaylistSummaryItem key={playlist._id} playlist={playlist}/>
                    )
                }

            </ul>
        </>
    )
}

export default PlaylistsInPublicProfile;