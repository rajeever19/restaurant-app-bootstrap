import { apiUrl } from "./config.json";

export const apiEndPoint = {
  food: apiUrl + "/menu/foods/",
  category: apiUrl + "/menu/categorylist/",
  category_Type: apiUrl + "menu/foods/?category=",
  login: apiUrl + "/customer/login/",
  signup: apiUrl + "customer/signup/",
  checkout: apiUrl + "/customer/checkout/",
  config: apiUrl + "/branchinfo/config/",
  profile: apiUrl + "/customer/profile/",
};
