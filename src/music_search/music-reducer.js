import {createSlice} from "@reduxjs/toolkit";
import {findMovieBySearchTermThunk, findMovieByImdbIdThunk} from "./music-thunks";

const initialState = {
    tracks: [],
    loading: false,
    details: {}
}

const musicReducer = createSlice({
    name: 'tracks',
    initialState,
    extraReducers: {
        [findMovieBySearchTermThunk.fulfilled]: (state, action) => {
            state.tracks = action.payload
        },
        [findMovieByImdbIdThunk.fulfilled]: (state, action) => {
            console.log(action)
            state.details = action.payload
        }
    }
})

export default musicReducer.reducer