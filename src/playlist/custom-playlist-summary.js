import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createPlaylistThunk, findFeaturedPlaylistsThunk, findAllPlaylistThunk, addSongToPlaylistThunk, removeSongFromPlaylistThunk, findPlaylistForUserThunk} from "./playlist-thunks";
import React from "react";
import PlaylistSummaryItem from "./playlist-summary-item";
const CustomPlaylists = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {customPlaylists, featuredPlaylists} = useSelector((state) => state.playlists)
    const [playlist, setPlaylist] = useState({name: 'New Playlist'})
    const [featured, setFeatured] = useState({featured: "false"})
    const dispatch = useDispatch()
    useEffect(() => {
        currentUser && dispatch(findPlaylistForUserThunk(currentUser._id))
        currentUser && dispatch(findFeaturedPlaylistsThunk())
    }, [])
    return(
        <>
            
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>
            }
            <div className="row">
                <div className="row">
                    <div className="col-8">
                        <input
                            className="form-control w-75 float-start"
                            onChange={(e) =>
                                setPlaylist({...playlist, name: e.target.value})}
                            value={playlist.name}/>
                    </div>
                    <div className="col-2">
                        {
                        currentUser && currentUser.featured &&
                        <select className="form-select float-end"
                                onChange={(e) => setFeatured({...featured, featured:e.target.value})}>
                              <option value="false">reg</option>
                              <option value="featured">fea</option>
                        </select>
                        }
                    </div>

                    <div className="col-2">
                        { currentUser &&
                            <button className="btn btn-primary float-end" onClick={() => {
                            dispatch(createPlaylistThunk(
                                {
                                    name: playlist.name,
                                    owner: currentUser,
                                    featured: featured.featured
                                }))
                        }}>Create</button>
                        }
                    </div>
                </div>
                
                <div className="list-group">
                    <li className="list-group-item"> 
                        <h1> Playlists</h1>
                    </li>
                    {
                        customPlaylists.map((playlist) =>
                            <PlaylistSummaryItem key={playlist._id} playlist={playlist}/>
                        )
                    }    
                </div>
                
                <div className="list-group">
                    <li className="list-group-item">
                        <h1>Featured Playlists</h1>
                    </li>
                    {
                        featuredPlaylists.map((p) =>
                        <PlaylistSummaryItem key={p._id} playlist={p}/>
                        )
                    }    
                </div>
                

            </div>
        </>
    )
}

export default CustomPlaylists;