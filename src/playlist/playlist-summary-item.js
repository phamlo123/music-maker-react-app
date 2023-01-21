import React from "react";
import { useNavigate } from "react-router-dom";


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
     "description": "hype you up!"
   }
}
) => {
    const navigate = useNavigate();
 return(
  <li className="list-group-item" onClick={() => navigate(`/playlists/${playlist._id}`)}>
   <div className="row">
     <div className="col-10">
       <div className="fw-bolder">{playlist.topic}</div>
       <div>{playlist.name}</div>
       <div>{playlist.description}</div>
       <div>{playlist.numSongs}</div>
       <div>by {playlist.owner.username}</div>
     </div>
     <div className="col-2">
        <button className="btn btn-success float-end" onClick={() => navigate(`/playlists/${playlist._id}`)}>See Detail</button>
     </div>
   </div>
  </li>
 );
};
export default PlaylistSummaryItem;
