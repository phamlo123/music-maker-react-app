import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMovieByImdbId, findMovieBySearchTerm} from "./music-service";

export const findMovieBySearchTermThunk = createAsyncThunk(
    'findMovieBySearchTerm',
    async (term) => await findMovieBySearchTerm(term)
)
export const findMovieByImdbIdThunk = createAsyncThunk(
    'findMovieByImdbId',
    async (key) =>  await findMovieByImdbId(key)
)