import {createSlice} from "@reduxjs/toolkit";
import { followThunk, unfollowThunk, getWhoToFollowThunk, getPeopleUserFollowThunk } from "./who-thunk";
const whosReducer = createSlice({
    name: 'whos',
    initialState: {
        whoToFollow: [],
        followees: [],
    },
    extraReducers: {
        [followThunk.fulfilled]: (state, action) => {
            state.whoToFollow = state.whoToFollow.filter(p => {
                return p._id !== action.payload._id
            })
            state.followees.push(action.payload)
        },
        [unfollowThunk.fulfilled]: (state, action) => {
            state.whoToFollow.push(action.payload)
            state.followees = state.followees.filter(p => {
                return p._id !== action.payload._id
            })
        },
        [getWhoToFollowThunk.fulfilled]: (state, action) => {
            state.whoToFollow = action.payload
        },
        [getPeopleUserFollowThunk.fulfilled]: (state, action) => {
            state.followees = action.payload
        }
    },
    reducers: {
        
    }
})

export default whosReducer.reducer