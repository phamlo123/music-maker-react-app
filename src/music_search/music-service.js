import axios from "axios";


// const SEARCH_URL = 'https://omdbapi.com/?apikey=5d6aac6c&s='
// const DETAILS_URL = 'https://omdbapi.com/?apikey=5d6aac6c&i='

export const findMovieBySearchTerm = async (term) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: `${term}`, locale: 'en-US', offset: '0', limit: '5'},
        headers: {
        'X-RapidAPI-Key': '3496e1656emsh9cc298a0bc3b23ep1d2a1ajsnfa61fa5c4b90',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    return axios.request(options).then(function (response) {
        return response.data.tracks.hits
    }).catch(function (error) {
        console.error(error);
    });
    }


export const findMovieByImdbId = async (key) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-details',
        params: {key: `${key}` , locale: 'en-US'},
        headers: {
        'X-RapidAPI-Key': '3496e1656emsh9cc298a0bc3b23ep1d2a1ajsnfa61fa5c4b90',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    return axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
}