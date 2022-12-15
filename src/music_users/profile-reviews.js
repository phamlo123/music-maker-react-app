import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findReviewsByUserThunk} from "../reviews/reviews-thunk";
import {useLocation} from "react-router";


const ProfileReviews = () => {
    const {currentUser} = useSelector((state) => state.users);
    const {reviews} = useSelector((state) => state.reviews);

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

    // console.log(reviews.reviews_by_users);

    return (
        <>
            <h1 className="pt-3">Reviews</h1>
            <ul className="list-group">
                {reviews.map((r) => <li className="list-group-item">{r.review}</li> )}
            </ul>
        </>
    )
}

export default ProfileReviews;