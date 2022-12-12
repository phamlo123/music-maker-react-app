import React from "react"
import Playlists from "../playlist/playlists-summary"
import {useDispatch, useSelector} from "react-redux";
import CustomPlaylists from "../playlist/custom-playlist-summary"
import WhoToFollowList from "./whoToFollowList";
import FolloweesList from "./followeeList";
export const Home = () => {
    const {currentUser} = useSelector((state) => state.users)
    let PlaylistStuff;
    if (currentUser) {
        PlaylistStuff = CustomPlaylists
    } else {
        PlaylistStuff = Playlists
    }
    return(
        <>
            <PlaylistStuff/>
            {currentUser && <WhoToFollowList/>}
            {currentUser && <FolloweesList/>}
        </>
    )
}