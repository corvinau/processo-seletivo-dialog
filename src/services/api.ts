import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

const api = applyCaseMiddleware(
  axios.create({
    baseURL: 'api.mocki.io/v2/c73aba09',
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