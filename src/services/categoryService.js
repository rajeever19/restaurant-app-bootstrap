// import http from "./httpService";
import { apiUrl } from "../config.json";
import axios from 'axios';
export function getCategories() {
  console.log("cate")
  return axios.get(apiUrl + "/menu/categorylist/");
}
