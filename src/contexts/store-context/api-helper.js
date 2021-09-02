import axios from 'axios';

const axiosInstance = ({ apiUrl, onError }) => {
  const api = axios.create({
    headers: {
      'Access-Control-Allow-Origin' : 'http://joinstre.am',
    },
    baseURL: apiUrl,
    timeout: -1,
  });


  api.interceptors.response.use(response => (response ? response.data : response));

  api.interceptors.response.use(response => response, error => Promise.reject(onError(error)));

  return api;
}

export { axiosInstance };
