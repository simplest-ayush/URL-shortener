import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://url-shortener-n3lc.onrender.com'
})

export default instance