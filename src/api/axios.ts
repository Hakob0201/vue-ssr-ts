import axios, {
  AxiosRequestConfig, AxiosResponse
} from 'axios';
import { getCookie } from '@/utils';

const service = axios.create({
  baseURL: 'http://127.0.0.1:8083/api', // ${import.meta.env.VITE_APP_BASE_DOMAIN}${import.meta.env.VITE_APP_BASE_API}
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getCookie('access_token');
    config.headers.Authorization = `Bearer ${token || null}`;

    if (!config.headers) {
      throw new Error(
        'Expected \'config\' and \'config.headers\' not to be undefined'
      );
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const finalResponse = {
      ...response,
      target: response?.data?.data || {
      }
    };

    return finalResponse;
  },
  error => {
    console.log('err' + error); // for debug
    return Promise.reject({
      ...error.response
    });
  }
);

export default service;
