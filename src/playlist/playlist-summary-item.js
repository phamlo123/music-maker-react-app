import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePlaylistThunk } from "./playlist-thunks";

const PlaylistSummaryItem = (
 {
   playlist = {
    "_id": 1,
     "topic": "Space",
     "name": "PlayListName",
     "duration": "2h",
     "numSongs": "40",
     "owner": "me",
     "image": "tesla.png",
     "description": "hype you up!",
     "songs": [],
     "preview_url": "sth"
   }
}
) => {
    const {currentUser} = useSelector((state) => state.users)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    
 return(
  <li className="list-group-item">
   <div>
     <div className="float-start">
       <div className="fw-bolder">{playlist.topic}</div>
       <div>{playlist.name}</div>
       <div>{playlist.description}</div>
       <div>Number of songs: {playlist.songs.length}</div>
       <div>by {playlist.owner.username}</div>
     </div>
     <div className="float-end">
        <button className="btn btn-success float-end" onClick={() => navigate(`/playlists/${playlist._id}`)}>See Detail</button>
     </div>
     { currentUser && currentUser.username==playlist.owner.username && location.pathname.includes("profile") &&
      <div className="float-end">
        <button className="btn btn-success float-end" onClick={() => dispatch(deletePlaylistThunk(playlist._id))}>Delete</button>
      </div>
     }
   </div>
  </li>
 );
};



export default PlaylistSummaryItem;
