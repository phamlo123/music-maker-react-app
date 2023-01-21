import axios from "axios";

const USERS_API = 'https://musicappnode.herokuapp.com/users'

const api = axios.create({withCredentials: true});

export const follow = async (uid, fid) => {
    const response = await api.post(`${USERS_API}/follow/${uid}`, {fid: fid})
    return response.data
}

export const unfollow = async (uid, fid) => {
    const response = await api.post(`${USERS_API}/unfollow/${uid}`, {ufid: fid})
    return response.data
}

export const getWhoToFollow = async (uid) => {
    const response = await api.get(`${USERS_API}/tofollow/${uid}`)
    return response.data
}

export const getPeopleUserFollow = async (uid) => {
    const response = await api.get(`${USERS_API}/follow/${uid}`)
    return response.data
}
