import axios from 'axios';
import { io } from 'socket.io-client';

const http = axios.create({
  baseURL: 'http://192.168.0.49:3333'
});

const socket = io('http://192.168.0.49:3333');

const api = { http, socket };

export default api;