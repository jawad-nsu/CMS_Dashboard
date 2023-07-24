import axios from 'axios';
import { BASE_URL } from '@/constant/apiConstants';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// intercepts request before they're handled by then / catch
// central error handler
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
