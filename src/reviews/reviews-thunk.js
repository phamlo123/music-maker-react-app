import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsBySong, findReviewsByUser} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)
export const findReviewsBySongThunk = createAsyncThunk(
    'findReviewsBySongThunk',
    async (sid) => findReviewsBySong(sid)

)
export const findReviewsByUserThunk = createAsyncThunk(
    'findReviewsByUserThunk',
    async (author) => findReviewsByUser(author)
)