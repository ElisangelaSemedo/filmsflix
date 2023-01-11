import axios from 'axios';
// Base da URL: https://api.themoviedb.org/3/
//URL da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=69ae5ab75100b55feb1a3d3fe7c7040a

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;