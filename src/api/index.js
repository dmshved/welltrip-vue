import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_VERSION = import.meta.env.VITE_API_VERSION

// axios instance for api calls
export const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/${API_VERSION}`,
  withCredentials: true,
  withXSRFToken: true,
})

// axios instance for /sanctum/csrf-cookie
export const axiosCsrfInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle unauthorized error
    if (error.response?.status === 401) {
      console.error('Unauthorized, logging out...')
    }

    // propagate error
    return Promise.reject(error)
  }
)
