import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

const api = applyCaseMiddleware(
  axios.create({
    baseURL: '../../db.json',
    xsrfHeaderName: 'X-CSRFToken',
    xsrfCookieName: 'csrftoken',
    withCredentials: false,
  }),
  {
    ignoreHeaders: true,
  },
);

export const { isAxiosError } = axios;
export default api;