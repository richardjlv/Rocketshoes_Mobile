import axios from 'axios';
import 'react-native-dotenv';

const api = axios.create({
  baseURL: process.env.API_URL,
});

export default api;
