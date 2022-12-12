import {createAsyncThunk} from "@reduxjs/toolkit";
import { follow, unfollow, getWhoToFollow, getPeopleUserFollow } from "./who-service";

export const followThunk = createAsyncThunk(
    'follow',
    async (params) => follow(params.uid, params.fid)
)
export const unfollowThunk = createAsyncThunk(
    'unfollow',
    async (params) => unfollow(params.uid, params.fid)
)
export const getWhoToFollowThunk = createAsyncThunk(
    'getWhoToFollow',
    async (uid) => getWhoToFollow(uid)
)
export const getPeopleUserFollowThunk = createAsyncThunk(
    'getPeopleUserFollow',
    async (uid) => getPeopleUserFollow(uid)
)