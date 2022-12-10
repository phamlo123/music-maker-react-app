import {BrowserRouter} from "react-router-dom";
import Navigation from "./navigation";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Login from "./music_users/login-music-user";
import Register from "./music_users/register-music-user";
import CurrentUser from "./music_users/current-music-user.js";
import {Routes, Route} from "react-router";
import Users from "./music_users";
import usersReducer from "./music_users/music-users-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProtectedRoute from "./music_users/protected-music-user.js";
import PublicProfile from "./music_users/public-music-user.js";
import Profile from "./music_users/music-user-profile.js";
import musicReducer from "./music_search/music-reducer.js";
import MusicSearch from "./music_search/music-search.js";
import MusicDetails from "./music_search/music-details.js";



const store = configureStore({
  reducer: {
      tracks: musicReducer,
      users: usersReducer
  }
})



function App() {
  return (
    <div className="container mt-4 mb-4">
      <Provider store={store}>
        <BrowserRouter>
            <CurrentUser>
                <Navigation/>
                <Routes>
                <Route path="/users" element={<Users/>}/>
                <Route path="/search" element={<MusicSearch/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={
                        <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                }/>
                <Route path="/details/:key" element={<MusicDetails/>}/>
                <Route path="/profile/:uid" element={<PublicProfile/>}/>
            </Routes>
          </CurrentUser>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
