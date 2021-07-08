import axios from "axios";
import { apiEndPoint } from "../Constants/apiEndPoint";
import { tokenKey } from "../Constants/tokenKey";


export async function login(email, password) {
  const { data } = await axios.post(apiEndPoint.login, {
    email,
    password,
  });
  console.log(data);
  localStorage.setItem(tokenKey, data.access);
}

export async function getCurrentUser() {
  const jwt = localStorage.getItem("token");
  try {
    const { data } = await axios.get(apiEndPoint.profile, {
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
  localStorage.setItem(tokenKey.authToken, jwt.token);
}

export function logout() {
  localStorage.removeItem(tokenKey.authToken);
}

export function getJwt() {
  return localStorage.getItem(tokenKey.authToken);
}

export default { login, logout, getCurrentUser, loginWithJwt, getJwt };
