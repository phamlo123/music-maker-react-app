import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./music-users-thunk";
import {Navigate} from "react-router";
import React from "react";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('alice')
    const [email, setEmail] = useState('email@gmail.com')
    const [password, setPassword] = useState('alice1234')
    const [featured, setFeatured] = useState("false")
    
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, email, featured}))
    }

    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <>
            <h1>Register</h1>
            <div>
                Username
                <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            </div>
            <div>
                Email
                <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="email"
                value={email}/>    
            </div>
            <div>
                Type
                <br/>
                <select id="type" name="types"
                onChange={(e) => setFeatured(e.target.value)}> 
                    <option value="false">Regular</option>
                    <option value="featured">Featured</option>
                </select>
            </div>
            password      
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="password"
                type="password"
                value={password}/>
            <button
                className="btn btn-primary w-100"
                onClick={handleRegisterBtn}>
                Register
            </button>
            {
                currentUser &&
                <h1>Welcome new user: {currentUser.username}</h1>
            }
        </>
    )
}
export default Register