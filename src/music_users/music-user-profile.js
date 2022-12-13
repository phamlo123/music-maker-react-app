import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./music-users-thunk";
import {useNavigate} from "react-router";
import React from "react";
import PlaylistsInProfile from "../playlist/playlists-in-profile";
const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return(
        <>
            {
                currentUser &&
                <h2>Welcome back, {currentUser.username}</h2>
            }
            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
            <PlaylistsInProfile/>
        </>
    )
}
export default Profile