import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMovieByImdbId, findSongBySearchTerm, findSongByNameLocal, searchForSongsSpotify, createSong, getSongByIdSpotify} from "./music-service";

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

export const createSongThunk = createAsyncThunk(
    'createSong',
    async (song) => await createSong(song)
)

export const getSongByIdSpotifyThunk = createAsyncThunk(
    'getSongByIdSpotify',
    async (song) => await getSongByIdSpotify(song)
)