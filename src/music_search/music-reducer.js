import {createSlice} from "@reduxjs/toolkit";
import {findSongBySearchTermThunk, findMovieByImdbIdThunk, findSongByNameLocalThunk, searchForSongsSpotifyThunk, createSongThunk, getSongByIdSpotifyThunk} from "./music-thunks";

const initialState = {
    tracks: [],
    loading: false,
    local_tracks: [],
    details: {},
    spotify_tracks: [], 
    createdSong: null
}

const musicReducer = createSlice({
    name: 'tracks',
    initialState,
    extraReducers: {
        [findSongBySearchTermThunk.fulfilled]: (state, action) => {
            state.tracks = action.payload
        },
        [findMovieByImdbIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        },
        [findSongByNameLocalThunk.fulfilled]: (state, action) => {
            state.local_tracks = action.payload
        },
        [searchForSongsSpotifyThunk.fulfilled]: (state, action) => {
            state.spotify_tracks = action.payload
        },
        [createSongThunk.fulfilled]: (state, action) => {
            state.createdSong = action.payload
        },
        [getSongByIdSpotifyThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        },
    },
    reducers: {
        
    }
})

export default musicReducer.reducer