import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsBySongThunk, findReviewsByUserThunk} from "./reviews-thunk";

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: {
        reviews: []
    },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload)
        },
        [findReviewsBySongThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findReviewsByUserThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        }
    },
    reducers: {
        
    }
})

export default reviewsReducer.reducer