import { apiUrl } from "../config.json";
import axios from "axios";

const apiEndpoint = apiUrl + "/menu/foods/";

export function getProducts() {
  console.log("raj");
  return axios.get(apiEndpoint);
}

export function getFoodbyCategory(id) {
  const apiEndCategory = `${"menu/foods/?category="}${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}${apiEndCategory}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
