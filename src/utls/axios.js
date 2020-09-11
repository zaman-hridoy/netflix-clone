import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3';

// Base URL to make requests to the movie database (TMDb)
const instance = axios.create({
    baseURL: baseURL
});

export default instance;