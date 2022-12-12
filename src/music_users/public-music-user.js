import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "./music-users-thunk";

import {Link} from "react-router-dom";

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid])

    return(
        <>
            <h1> Welcome to {publicProfile && publicProfile.username} public profile page</h1>
            
        </>
    )
}

export default PublicProfile