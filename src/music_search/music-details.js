import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieByImdbIdThunk} from "./music-thunks";
// import {createReviewThunk, findReviewsByMovieThunk} from "../reviews/reviews-thunks";



const MusicDetails = () => {
    const {key} = useParams()
    // const [review, setReview] = useState('')
    // const {reviews} = useSelector((state) => state.reviews)
    const {details} = useSelector((state) => state.tracks)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMovieByImdbIdThunk(key))
        // dispatch(findReviewsByMovieThunk(imdbID))
    },[])
    // const handlePostReviewBtn = () => {
    //     dispatch(createReviewThunk({
    //         review,
    //         imdbID
    //     }))
    // }
    return(
        <>
            <h1> hi </h1>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <h1> {details.subtitle}</h1>
                        {/* <li className="list-group-item">Director: {details.Director}</li>
                        <li className="list-group-item">Released: {details.Released}</li> */}
                    </ul>
                </div>
                <div className="col">
                    {/* <img src={details.Poster}/> */}
                </div>
            </div>
            {/* {
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
                    reviews.map((review) =>
                        <li className="list-group-item">
                            {review.review}
                            <Link to={`/profile/${review.author._id}`} className="float-end">
                                {review.author.username}
                            </Link>
                        </li>
                    )
                }
            </ul>
            */
            <pre>
                {JSON.stringify(details, null, 2)}
            </pre> }
        </>
    )
}
export default MusicDetails