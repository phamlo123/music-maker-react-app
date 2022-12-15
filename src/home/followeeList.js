import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import { getPeopleUserFollowThunk, unfollowThunk } from "./who-thunk.js";
import { Link } from "react-router-dom";
const FolloweeItem = (
 {
   who = { username: 'NASA', _id: "ud"}
 }
) => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.users);
  let a = {uid: currentUser._id, fid: who._id}
 return(
  <li className="list-group-item">
   <div className="row">
    <div className="col-10">
      <Link to={`/profile/${who._id}`}>
                                {who.username}
      </Link>
    </div>
    <div className="col-2">
        <button className="btn btn-primary rounded-pill float-end" onClick={() => {dispatch(unfollowThunk(a))}}>Unfollow</button>
    </div>
   </div>
  </li>
 );
};
const FolloweesList = () => {
  const {followees} = useSelector((state) => state.whos);
  const {currentUser} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    currentUser && dispatch(getPeopleUserFollowThunk(currentUser._id))
  }, [])
    return(
    <ul className="list-group">
        <li className="list-group-item">
        <h3>People I follow</h3>
        </li>
        {
            followees.map(who =>
                <FolloweeItem key={who._id} who={who}/>)
        }
   </ul>
    );
};

export default FolloweesList;