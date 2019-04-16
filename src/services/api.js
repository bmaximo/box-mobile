import axios from 'axios';

const api = axios.create({
    baseURL: 'https://barbarabox-backend.herokuapp.com'
});

export default api;