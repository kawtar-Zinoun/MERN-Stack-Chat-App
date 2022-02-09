import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://localhost:8080/api/test/';

// this user service sends an axios request with headers that we defined earlier to get user data
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new UserService();