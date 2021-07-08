import axios from "axios";
import { apiEndPoint } from '../Constants/apiEndPoint';



export function getProducts() {
  console.log("raj");
  return axios.get(apiEndPoint.food);
}

export function getCategories() {
  console.log("cate");
  return axios.get(apiEndPoint.category);
}

export function getFoodbyCategory(id) {
  const apiEndCategory = `${apiEndPoint.category_Type}${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiEndCategory}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
