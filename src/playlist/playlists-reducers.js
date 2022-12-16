import {createSlice} from "@reduxjs/toolkit";
import {createPlaylistThunk, deletePlaylistThunk, findAllPlaylistThunk, addSongToPlaylistThunk, findFeaturedPlaylistsThunk, removeSongFromPlaylistThunk, findPlaylistByIdThunk, findPlaylistForUserThunk, findPlaylistByUserThunk} from "./playlist-thunks.js";


const playlistsReducer = createSlice({
    name: 'playlists',
    initialState: {
        playlists: [], 
        loading: false,
        currentPlaylist: null,
        customPlaylists: [],
        userPlaylists: [],
        featuredPlaylists: []
    },
    extraReducers: {
        [findPlaylistByIdThunk.fulfilled]: (state, action) => {
            state.currentPlaylist = action.payload
        },
        [findFeaturedPlaylistsThunk.fulfilled]: (state, action) => {
            state.featuredPlaylists = action.payload
        },
        [findAllPlaylistThunk.fulfilled]: (state, action) => {
            state.playlists = action.payload
        },
        [createPlaylistThunk.fulfilled]: (state, action) => {
            state.playlists.push(action.payload)
            state.customPlaylists.push(action.payload)
            state.userPlaylists.push(action.payload)
        },
        [deletePlaylistThunk.fulfilled]: (state, action) => {
            // const midx = state.findIndex(m => m._id === action.payload)
            state.playlists = state.playlists.filter(p => {
                return p._id !== action.payload
            })
            state.userPlaylists = state.userPlaylists.filter(p => {
                return p._id !== action.payload
            })
        },

        [addSongToPlaylistThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.currentPlaylist = action.payload
        },
        [removeSongFromPlaylistThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.currentPlaylist = action.payload
        },
        [findPlaylistForUserThunk.fulfilled]: (state, action) => {
            state.customPlaylists = action.payload
        },
        [findPlaylistByUserThunk.fulfilled]: (state, action) => {
            state.userPlaylists = action.payload
        }
    },
    reducers: {

    }
})

export default playlistsReducer.reducer;