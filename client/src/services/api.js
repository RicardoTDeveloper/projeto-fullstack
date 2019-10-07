import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-nodejs-aircnc.azurewebsites.net/',
});

export default api

