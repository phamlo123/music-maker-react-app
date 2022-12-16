import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createPlaylistThunk, deletePlaylistThunk, findFeaturedPlaylistsThunk, findAllPlaylistThunk, addSongToPlaylistThunk, removeSongFromPlaylistThunk} from "./playlist-thunks";
import React from "react";
import PlaylistSummaryItem from "./playlist-summary-item";

const Playlists = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {featuredPlaylists} = useSelector((state) => state.playlists)
    const {playlists} = useSelector((state) => state.playlists)
    const [playlist, setPlaylist] = useState({name: 'New Playlist'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllPlaylistThunk())
    }, [])
    return(
        <>
            <h1>Playlists</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>
            }
            <ul className="list-group">
                <li className="list-group-item">
                    { currentUser &&
                        <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createPlaylistThunk(
                            {
                                name: playlist.name,
                                owner: currentUser
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
                    playlists.map((playlist) =>
                        <PlaylistSummaryItem key={playlist._id} playlist={playlist}/>
                    )
                }


            </ul>
        </>
    )
}

export default Playlists;