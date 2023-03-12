import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export const externalInstance = axios.create();

export default instance;
