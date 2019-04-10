import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-omnistack-guilherme.herokuapp.com',
});

export default api;