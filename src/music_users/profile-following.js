/* eslint-disable */
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import {getPeopleUserFollowThunk} from "../home/who-thunk";
import {Link} from "react-router-dom";

const ProfileFolloweeItem = (
    {
        who = {username: 'NASA', _id: "ud", currentUserFollowing: "123"}
    }
) => {

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <Link to={`/profile/${who._id}`}>
                        {who.username}
                    </Link>
                </div>
            </div>
        </li>
    );
}

const ProfileFollowing = () => {
    const {followees} = useSelector((state) => state.whos);
    const {currentUser} = useSelector((state) => state.users);


    const dispatch = useDispatch()
    const path = useLocation().pathname;
    const parts = path.split("/")
    let uid;
    if (path.includes("profile/")) {
        uid = parts[parts.length - 1]
    } else {
        uid = currentUser._id
    }

    useEffect(() => {
        dispatch(getPeopleUserFollowThunk(uid))
    }, [])

    return (
        <>
            <h1 className="pt-3">Following</h1>
            <ul className="list-group">
                {followees.map((u) => <ProfileFolloweeItem key={u._id} who={u}/>)}
            </ul>
        </>
    )
}

export default ProfileFollowing;