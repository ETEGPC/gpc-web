import axios from 'axios';
import { io } from 'socket.io-client';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

const socket = io(`${process.env.REACT_APP_API_BASE_URL}`);

const api = { http, socket };

export default api;