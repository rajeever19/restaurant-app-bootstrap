// import http from "./httpService";
import { apiUrl } from "../config.json";
// import jwtDecode from "jwt-decode";
import axios from "axios";

const apiEndpoint = apiUrl + "/customer/login/";
const apiEndpointToprofie = apiUrl + "/customer/profile/";
const tokenKey = "token";

export async function login(email, password) {
  const { data } = await axios.post(apiEndpoint, {
    email,
    password,
  });

  console.log(data);
  localStorage.setItem(tokenKey, data.access);
}

export async function getCurrentUser() {
  const jwt = localStorage.getItem("token");
  try {
    const { data } = await axios.get(apiEndpointToprofie, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return data[0];
  } catch (ex) {
    return null;
  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt.token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default { login, logout, getCurrentUser, loginWithJwt, getJwt };
