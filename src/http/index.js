import axios from 'axios';

axios.defaults.baseURL = 'https://6635230c9bb0df2359a3ea79.mockapi.io/';

export const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
