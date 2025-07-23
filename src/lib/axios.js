// axios.js
import axios from "axios";
const VITE_APP_API_URL = meta.env.VITE_APP_API_URL || 'backend-heal-with-us.onrender.com/api';
// This will be populated by Netlify's environment variables in production
// and by your .env file in development.
const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // This is good, keep it for authentication
});
