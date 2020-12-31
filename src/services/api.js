import axios from 'axios';

const  api = axios.create({
    baseURL: 'https://healthy-trusting-hawk.glitch.me',
})

export default api;
