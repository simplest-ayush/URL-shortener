import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://url-shortener-production-3f34.up.railway.app'
})

export default instance