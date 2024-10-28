import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.defaults.headers.common['Authorization'] =
  `Basic ${process.env.NEXT_PUBLIC_API_KEY}`

// Add an Axios response interceptor to handle 401 responses

export { axiosInstance }
