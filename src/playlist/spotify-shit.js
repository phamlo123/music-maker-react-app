
import axios from "axios";
import qs from "qs";
import {Buffer} from 'buffer';

let client_id = '9068d7af185f4ba9accd02a88b14f024';
let client_secret = '870c85f8efd14612be131d161e08d0f0';
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

export const Authorize = async () => {
    try{
      //make post request to SPOTIFY API for access token, sending relavent info
      const token_url = 'https://accounts.spotify.com/api/token';
      const data = qs.stringify({'grant_type':'client_credentials'});
  
      const response = await axios.post(token_url, data, {
        headers: { 
          'Authorization': `Basic ${auth_token}`,
          'Content-Type': 'application/x-www-form-urlencoded' 
        }
      })
      //return access token
      console.log(response.data.access_token);   
      return response.data.access_token;
    }catch(error){
      //on fail, log the error in console
      console.log(error);
    }
}

export const searchForSongs = async (searchTerm) => {
    //request token using getAuth() function
    const access_token = await Authorize();
  
    const api_url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`;
    try{
      const response = await axios.get(api_url, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      console.log(response.data);
      return response.data;
    }catch(error){
      console.log(error);
    }  
  };


// const options = {
//     method: 'GET',
//     url: 'https://shazam.p.rapidapi.com/search',
//     params: {term: `${term}`, locale: 'en-US', offset: '0', limit: '5'},
//     headers: {
//     'X-RapidAPI-Key': '1764b85092msh007f2c7f344fc96p11e009jsnc8c8757450a3',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
// };

