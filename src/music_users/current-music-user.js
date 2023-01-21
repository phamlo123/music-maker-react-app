import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "./music-users-thunk";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    })
    return(children)
}
export default CurrentUser