import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./music-users-thunk";
import {useEffect, useState} from "react";
import {useParams,useNavigate} from "react-router";
import React from "react";
import PlaylistsInProfile from "../playlist/playlists-in-profile";
import { editEmailThunk } from "./music-users-thunk";
const Profile = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    const handleEditEmailBtn = () => {
        dispatch(editEmailThunk({uid: currentUser._id, email: searchTerm}))
    }
  
    return(
        <>
            {
                currentUser &&
                <h2>Welcome back, {currentUser.username}</h2>
            }

            <div>
                email: {currentUser.email}
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-control w-75"
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }}
                            value={searchTerm}/>
                        <button
                            className="btn btn-primary float-end"
                            onClick={handleEditEmailBtn}>
                            Edit Email
                        </button>
                    </li>
                </ul>

            </div>
            <PlaylistsInProfile/>
            <button
                className="btn btn-danger float-end pt-2"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}
export default Profile