import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getSongByIdSpotifyThunk} from "./music-thunks";
import React from "react";
import { Link } from "react-router-dom";
import { createReviewThunk } from "../reviews/reviews-thunk";
import { findReviewsBySongThunk } from "../reviews/reviews-thunk";


const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };
  
const PlaySong = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );
};
  
const MusicDetails = () => {
    const {key} = useParams()
    const [review, setReview] = useState('')
    const {reviews_by_songs} = useSelector((state) => state.reviews)
    const {details} = useSelector((state) => state.tracks)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongByIdSpotifyThunk(key))
        dispatch(findReviewsBySongThunk(key))
    },[])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            details
        }))
    }
    return(
        <>
         <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <h1> name: {details.name}</h1>
                        
                        <div>
                            Album: {details.album && details.album.name}    
                        </div>
                        <div>
                            Artist: {details.artists && details.artists[0].name}                            
                        </div>             
                    </ul>
                </div>
            </div>
            <div>
                
            </div>
            {
                currentUser &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                    <button onClick={handlePostReviewBtn}>Post Review</button>
                </div>
            }
            <ul className="list-group">
                {
                    reviews_by_songs.map((review) =>
                        <li className="list-group-item">
                            {review.review}
                            <Link to={`/profile/${review.user._id}`} className="float-end">
                                {review.user.username}
                            </Link>
                        </li>
                    )
                }
            </ul>
            {details.preview_url && <PlaySong key={details.id} url={details.preview_url}/>}
        </>
    )
}


export default MusicDetails