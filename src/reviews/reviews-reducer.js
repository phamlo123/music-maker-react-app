import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsBySongThunk, findReviewsByUserThunk} from "./reviews-thunk";

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: {
        reviews_by_songs: [],
        reviews_by_users: []
    },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews_by_songs.push(action.payload)
        },
        [findReviewsBySongThunk.fulfilled]: (state, action) => {
            state.reviews_by_songs = action.payload
        },
        [findReviewsByUserThunk.fulfilled]: (state, action) => {
            state.reviews_by_users = action.payload
        }
    },
    reducers: {
        
    }
})

export default reviewsReducer.reducer