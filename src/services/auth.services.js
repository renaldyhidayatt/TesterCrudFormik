import config from "config";
import axios from "axios";

export const authServices = {
  register,
  login
};

function login(user) {
  return axios.post(`${config.apiUrl}/users/authenticate`, user);
}

function register(user) {
  return axios.post(`${config.apiUrl}/users/register`, user);
}
