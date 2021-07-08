import axios from "axios";
import { apiEndPoint } from "../Constants/apiEndPoint";

export async function register(user) {
  return await axios.post(apiEndPoint.signup, {
    first_name: user.first_name,
    last_name: user.last_name,
    isGuest: true,
    password: user.password,
    phone: user.phone,
    email: user.email,
  });
}

export async function checkout(data) {
  return await axios.post(apiEndPoint.checkout, data);
}

export async function config() {
  return await axios.get(apiEndPoint.config);
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
