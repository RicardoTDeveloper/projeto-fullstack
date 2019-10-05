import axios from 'axios'

const api = axios.create({
    baseURL: 'http://8cacb6ab.ngrok.io/',
})

export default api; 