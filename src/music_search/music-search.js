import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieBySearchTermThunk} from "./music-thunks";
import {Link} from "react-router-dom";

const MusicSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const {tracks} = useSelector((state) => state.tracks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMovieBySearchTermThunk(searchTerm))
    }, [])
    return (
        <>
            <h1>Music Song Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findMovieBySearchTermThunk(searchTerm))
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
                    tracks && tracks.map((track) =>
                        <li key={track.track.key} className="list-group-item">
                        {/* <i onClick={() => {
                                dispatch(userLikesMovieThunk({
                                    uid: 111, mid: movie.imdbID
                                }))
                            }} className="float-end bi bi-hand-thumbs-up"></i>
                            <i className="float-end bi bi-hand-thumbs-down me-2"></i> */}
                            <img src={track.track.images.background} height={50}/>
                            <Link to={`/details/${track.track.key}`}>
                                {track.track.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <pre>
                {/* {JSON.stringify(movies, null, 2)} */}
            </pre>
        </>
    )
}

export default MusicSearch