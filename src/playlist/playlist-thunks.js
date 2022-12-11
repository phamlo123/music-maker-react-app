import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllPlaylist, createPlaylist, updatePlaylist, addSongToPlaylist, removeSongFromPlaylist, deletePlaylist, findPlaylistById} from "./playlist-services";




export const createPlaylistThunk = createAsyncThunk(
    'createPlaylist',
    (newPlaylist) => createPlaylist(newPlaylist)
)

export const findAllPlaylistThunk = createAsyncThunk(
    'findAllPlaylist',
    () => findAllPlaylist()
)

export const findPlaylistByIdThunk = createAsyncThunk(
    'findPlaylistById',
    (pid) => findPlaylistById(pid)
)

export const updatePlaylistThunk = {}

export const addSongToPlaylistThunk = createAsyncThunk(
    'addSongToPlaylist',
    (pid, song) => addSongToPlaylist(pid, song)
)

export const removeSongFromPlaylistThunk = createAsyncThunk(
    'removeSongFromPlaylist',
    (pid, song) => removeSongFromPlaylist(pid, song)
)

export const deletePlaylistThunk = createAsyncThunk(
    'deletePlaylist',
    (pid) => deletePlaylist(pid)
)
