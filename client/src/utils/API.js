import axios from "axios";

const headers = {
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods':'*',
  'Content-Type': 'application/x-www-form-urlencoded'
};
const burl = "http://localhost:8080";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/login`,
      {
        email,
        password
      }
    );
  },
  signup: function(data) {
    return axios.post(
      `${burl}/register`,
      data
    );
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};