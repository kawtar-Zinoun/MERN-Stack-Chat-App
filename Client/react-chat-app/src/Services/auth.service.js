import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/auth/";

class AuthService { // a service for user authentification (login, register, logout)

  async login(email, password) { // this is to log the user in, if the response is positive, we store the access token
    const response = await axios
          .post(API_URL + "signin", { email, password });
      if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();