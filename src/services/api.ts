import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'cf6b9a6b7ed641dd6b3c4462dd516337',
        language: 'en-US',
        include_adults: false
    }

})