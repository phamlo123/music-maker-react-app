import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findReviewsByUserThunk} from "../reviews/reviews-thunk";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";


const SongDetails = ({review = "WHAT A COOL SONG!!", song = "0AzD1FEuvkXP1verWfaZdv"}) => {
    return (
        <li className="list-group-item">
            <Link to={`/details/${song}`}>
                {review}
            </Link>
        </li>
    )
}

const ProfileReviews = () => {
    const {currentUser} = useSelector((state) => state.users);
    const {reviews_by_users} = useSelector((state) => state.reviews);
    console.log(reviews_by_users)
    const dispatch = useDispatch();
    const path = useLocation().pathname;
    const parts = path.split("/")
    let uid;
    if (path.includes("profile/")) {
        uid = parts[parts.length - 1]
    } else {
        uid = currentUser._id
    }
    useEffect(() => {
        dispatch(findReviewsByUserThunk(uid))
    }, [])

    return (
        <>
            <h1 className="pt-3">Reviews</h1>
            <ul className="list-group">
                {reviews_by_users.map((r) => <SongDetails key={r._id} review={r.review} song={r.song}/>)}
            </ul>
        </>
    )
}

export default ProfileReviews;