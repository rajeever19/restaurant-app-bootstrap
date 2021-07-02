// import http from "./httpService";
import { apiUrl } from "../config.json";
import axios from "axios";

const apiEndpoint = apiUrl + "customer/signup/";

export async function register(user) {
  // console.log(user, "register");
  return await axios.post(apiEndpoint, {
    first_name: user.first_name,
    last_name: user.last_name,
    isGuest: true,
    password: user.password,
    phone: user.phone,
    email: user.email,
  });
}
const apiEndpointofcheckout = apiUrl + "/customer/checkout/";

export async function checkout(data) {
  // console.log(user, "register");

  return await axios.post(apiEndpointofcheckout, data);
}

const apiOfConfig = apiUrl + "/branchinfo/config/";
export async function config() {
  return await axios.get(apiOfConfig);
}

// {
//   date: "2020-06-28 12:30:34",
//   total: 500,
//   order: null,
//   order_generate: false,
//   note: null,
//   tip: 5,
//   address: null,
//   takeaway: false,
//   items: [
//     {
//       id: 4,
//       price: 40,
//       quantity: 2,
//       name: "abcd",
//     },
//     {
//       id: 5,
//       price: 45,
//       quantity: 3,
//       name: "abcd",
//     },
//   ],
// }
