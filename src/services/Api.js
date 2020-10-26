import axios from 'axios';

const api =  axios.create({
    baseURL: 'http://list-users-api-com.umbler.net'
});

export default api;