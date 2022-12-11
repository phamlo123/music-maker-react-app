import {createSlice} from "@reduxjs/toolkit";
import {findSongBySearchTermThunk, findMovieByImdbIdThunk, findSongByNameLocalThunk, searchForSongsSpotifyThunk} from "./music-thunks";

const initialState = {
    tracks: [],
    loading: false,
    local_tracks: [],
    details: {},
    spotify_tracks: []
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

    },
    reducers: {
        
    }
})

export default musicReducer.reducer