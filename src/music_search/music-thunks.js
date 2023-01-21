import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMovieByImdbId, findSongBySearchTerm, findSongByNameLocal, searchForSongsSpotify} from "./music-service";

export const findSongBySearchTermThunk = createAsyncThunk(
    'findSongBySearchTerm',
    async (term) => await findSongBySearchTerm(term)
)
export const findMovieByImdbIdThunk = createAsyncThunk(
    'findMovieByImdbId',
    async (key) =>  await findMovieByImdbId(key)
)

export const findSongByNameLocalThunk = createAsyncThunk(
    'findSongByNameLocal',
    async (key) => await findSongByNameLocal(key)
)

export const searchForSongsSpotifyThunk = createAsyncThunk(
    'searchForSongsSpotify',
    async (key) => await searchForSongsSpotify(key)
)