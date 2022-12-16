import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllPlaylist, createPlaylist, updatePlaylist, addSongToPlaylist, findFeaturedPlaylists, removeSongFromPlaylist, deletePlaylist, findPlaylistById, findPlaylistForUser, findPlaylistByUser} from "./playlist-services";


export const createPlaylistThunk = createAsyncThunk(
    'createPlaylist',
    (newPlaylist) => createPlaylist(newPlaylist)
)

export const findAllPlaylistThunk = createAsyncThunk(
    'findAllPlaylist',
    () => findAllPlaylist()
)

export const findFeaturedPlaylistsThunk = createAsyncThunk(
    'findFeaturedPlaylists',
    () => findFeaturedPlaylists()
)


export const findPlaylistByIdThunk = createAsyncThunk(
    'findPlaylistById',
    (pid) => findPlaylistById(pid)
)

export const updatePlaylistThunk = {}

export const addSongToPlaylistThunk = createAsyncThunk( 
    'addSongToPlaylist',
    (params) => addSongToPlaylist(params.pid, params.song)
)

export const removeSongFromPlaylistThunk = createAsyncThunk(
    'removeSongFromPlaylist',
    (params) => removeSongFromPlaylist(params.pid, params.song)
)

export const deletePlaylistThunk = createAsyncThunk(
    'deletePlaylist',
    (pid) => deletePlaylist(pid)
)
export const findPlaylistForUserThunk = createAsyncThunk(
    'findPlaylistForUser',
    (uid) => findPlaylistForUser(uid)
)

export const findPlaylistByUserThunk = createAsyncThunk(
    'findPlaylistByUser',
    (uid) => findPlaylistByUser(uid)
)
