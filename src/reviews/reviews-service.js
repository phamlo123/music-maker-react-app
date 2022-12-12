import axios from "axios";

const REVIEW_API = 'http://localhost:4000/songs/reviews'
const MOVIE_REVIEWS_API = 'http://localhost:4000/songs'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/reviews'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    let newSong = {}
    newSong.artist_name = review.details.artists[0].name
    newSong.track_name = review.details.name
    newSong.track_id = review.details.id
    newSong.duration = review.details.duration_ms
    newSong.album = review.details.album.name
    newSong.review = review.review
    const response = await api.post(REVIEW_API, newSong)
    return response.data
}

export const findReviewsBySong = async (sid) => {
    const response = await api.get(`${MOVIE_REVIEWS_API}/reviews/${sid}`)
    return response.data
}

export const findReviewsByUser = async (uid) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/users/${uid}`)
    return response.data
}
