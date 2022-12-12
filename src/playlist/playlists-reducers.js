import {createSlice} from "@reduxjs/toolkit";
import {createPlaylistThunk, deletePlaylistThunk, findAllPlaylistThunk, addSongToPlaylistThunk, removeSongFromPlaylistThunk, findPlaylistByIdThunk, findPlaylistForUserThunk} from "./playlist-thunks.js";


const playlistsReducer = createSlice({
    name: 'playlists',
    initialState: {
        playlists: [], 
        loading: false,
        currentPlaylist: null,
        customPlaylists: []
    },
    extraReducers: {
        [findPlaylistByIdThunk.fulfilled]: (state, action) => {
            state.currentPlaylist = action.payload
        },
        
        [findAllPlaylistThunk.fulfilled]: (state, action) => {
            state.playlists = action.payload
        },
        [createPlaylistThunk.fulfilled]: (state, action) => {
            state.playlists.push(action.payload)
        },
        [deletePlaylistThunk.fulfilled]: (state, action) => {
            // const midx = state.findIndex(m => m._id === action.payload)
            state.playlists = state.playlists.filter(p => {
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
        }
    },
    reducers: {

    }
})

export default playlistsReducer.reducer;