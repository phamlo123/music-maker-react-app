import axios from "axios";

const REVIEW_API = 'http://localhost:4000/reviews'
const MOVIE_REVIEWS_API = 'http://localhost:4000/songs'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/users'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    let newSong = {}
    newSong.artist_name = review.artists[0].name
    newSong.track_name = review.name
    newSong.track_id = review.artists[0].id
    newSong.duration = review.duration_ms
    newSong.album = review.album.name
    newSong.reivew = review
    const response = await api.post(REVIEW_API, newSong)
    return response.data
}

export const findReviewsBySong = async (sid) => {
    const response = await api.get(`${MOVIE_REVIEWS_API}/reviews/${sid}`)
    return response.data
}

export const findReviewsByUser = async (uid) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/reviews/${uid}`)
    return response.data
}
