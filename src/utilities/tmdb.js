const API_KEY = import.meta.env.VITE_API_KEY;

import axios from "axios";

const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: `${API_KEY}`,
    },
});

export default tmdb;
