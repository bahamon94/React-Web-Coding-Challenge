import axios from 'axios'
import { API_URL } from "../constants/settings";


const axiosIntance = axios.create({
  baseURL: API_URL,
  // baseURL: process.env.
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosIntance