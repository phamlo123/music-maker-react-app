import {useDispatch, useSelector} from "react-redux";
import { searchForSongsSpotifyThunk } from "../music_search/music-thunks";
import { addSongToPlaylistThunk } from "./playlist-thunks";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const SongSearch = () => {
    const [searchTerm, setSearchTerm] = useState('nothingnow')
    const {local_tracks} = useSelector((state) => state.tracks)
    const {currentUser} = useSelector((state) => state.users)
    const {spotify_tracks} = useSelector((state) => state.tracks)
    const {currentPlaylist} = useSelector((state) => state.playlists)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(findSongByNameLocalThunk(searchTerm))
    // }, [])
    // console.log(createdSong)
    const {pathname} = useLocation()
    let hideButton = true;
    if (pathname.includes("search")) {
        hideButton = false;
    }
    return (
        <>
            <h1>Search for Songs</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
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
                    spotify_tracks && spotify_tracks.map((track, index) =>
                        <li key={track.id} className="list-group-item">
                                <div className="row">
                                    <div className="col-1">
                                        Pulled from spotify: {index + 1}
                                    </div>
                                    <div className="col-9">
                                        <div>
                                            
                                            <Link to={`/details/${track.id}`}>
                                                {track.name}
                                            </Link>
                                        </div>
                                        <div>
                                            artist: {track.artists[0].name}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        {   currentPlaylist && currentUser && currentUser.username === currentPlaylist.owner.username && hideButton &&
                                            <button className="btn btn-primary float-end" onClick={() => {
                                                let params = {pid: currentPlaylist._id, song: track}
                                                dispatch(addSongToPlaylistThunk(params))
                                            }}>
                                                Add to Playlist
                                            </button>
                                        }
                                            
                                    </div>

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