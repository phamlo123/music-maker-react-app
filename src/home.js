import React from "react"
import Playlists from "./playlist/playlists-summary"
import {useDispatch, useSelector} from "react-redux";
import CustomPlaylists from "./playlist/custom-playlist-summary"
export const Home = () => {
    const {currentUser} = useSelector((state) => state.users)
    let Item;
    if (currentUser) {
        Item = CustomPlaylists
    } else {
        Item = Playlists
    }
    return(
        <>
            <Item/>
        </>
    )
}