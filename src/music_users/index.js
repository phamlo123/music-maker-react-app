import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "./music-users-thunk.js";

const Users = () => {
    const {users} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h1> Welcome! These are the all the people who use our Music Maker :) </h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <li key={user._id} className="list-group-item">
                        {user.username}
                    </li>
                    )
                }
            </ul>
        </>
    )
}

export default Users