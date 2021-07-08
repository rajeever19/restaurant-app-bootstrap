import React, { createContext, useReducer } from "react";
import {
  CREATE_FOOD,
  SET_FOOD,
  SET_LIST_VIEW,
  COMPLETE_FOOD,
  ADD_FOOD_TO_CART,
  DELETE_FOOD_TO_CART,
  DELETE_ALL_FOOD_TO_CART,
  INCREASE_FOOD_TO_CART,
  DECREASE_FOOD_TO_CART,
  SET_SEARCH,
  SET_CHECKOUT,
  IS_NONVEG,
  IS_VEG,
  SET_USER,
} from "./constants";

export const FoodContext = createContext();

// Reducer
const foodReducer = (state, action) => {
  switch (action.type) {
    case SET_FOOD:
      console.log(action);
      return {
        ...state,
        foods: [...action.payload],
      };
    case CREATE_FOOD:
      return {
        ...state,
        foods: [action.payload],
      };
    case SET_LIST_VIEW:
      return {
        ...state,
        listview: action.payload,
      };

    case COMPLETE_FOOD:
      return {
        ...state,
        foods: state.foods.map((food) =>
          food.id === action.payload
            ? Object.assign(food, { completed: true })
            : food
        ),
      };
    case ADD_FOOD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_FOOD_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((f) => f.id !== action.payload),
      };
    case DELETE_ALL_FOOD_TO_CART:
      return {
        ...state,

        cart: action.payload,
      };
    case INCREASE_FOOD_TO_CART:
      return {
        ...state,
        cart: state.cart.map((a) =>
          a.id === action.payload ? { ...a, quantity: a.quantity + 1 } : a
        ),
      };
    case DECREASE_FOOD_TO_CART:
      return {
        ...state,
        cart: state.cart.map((a) =>
          a.id === action.payload ? { ...a, quantity: a.quantity - 1 } : a
        ),
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    //checkout data
    case SET_CHECKOUT:
      return {
        ...state,
        checkout: action.payload,
      };
    //VEG NON-VEG
    case IS_VEG:
      return {
        ...state,
        is_veg: action.payload,
      };
    case IS_NONVEG:
      return {
        ...state,
        is_nonveg: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const FoodProvider = (props) => {
  const initialState = {
    foods: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    listview: false,
    currentFood: null,
    search: "",
    checkout: [
      {
        delivery_charge: "",
        item_total: "",
        status: "",
        tax: "",
        tip: "",
        total_pay: "",
      },
    ],
    is_veg: false,
    is_nonveg: false,
    user: JSON.parse(localStorage.getItem("user")) || {},
  };

  const [state, dispatch] = useReducer(foodReducer, initialState);

  // ACTIONS
  const additemtocart = (cart) => {
    dispatch({
      type: ADD_FOOD_TO_CART,
      payload: cart,
    });
  };
  const setlistview = (c) => {
    dispatch({
      type: SET_LIST_VIEW,
      payload: c,
    });
  };
  const deleteitemtocart = (id) => {
    dispatch({
      type: DELETE_FOOD_TO_CART,
      payload: id,
    });
  };
  const deleteallitemtocart = (cart) => {
    dispatch({
      type: DELETE_ALL_FOOD_TO_CART,
      payload: [],
    });
  };
  const increaseitemtocart = (id) => {
    dispatch({
      type: INCREASE_FOOD_TO_CART,
      payload: id,
    });
  };
  const decreaseitemtocart = (id) => {
    dispatch({
      type: DECREASE_FOOD_TO_CART,
      payload: id,
    });
  };

  const createFood = (food) => {
    dispatch({
      type: CREATE_FOOD,
      payload: food,
    });
  };

  const setFood = (food) => {
    dispatch({
      type: SET_FOOD,
      payload: food,
    });
  };
  const completeFood = (id) => {
    dispatch({
      type: COMPLETE_FOOD,
      payload: id,
    });
  };
  const setsearch = (s) => {
    dispatch({
      type: SET_SEARCH,
      payload: s,
    });
  };
  const setcheckout = (s) => {
    dispatch({
      type: SET_CHECKOUT,
      payload: s,
    });
  };
  //VEG AND NON-VEG
  const setveg = (s) => {
    dispatch({
      type: IS_VEG,
      payload: s,
    });
  };
  const setnonveg = (s) => {
    dispatch({
      type: IS_NONVEG,
      payload: s,
    });
  };
  const setuser = (s) => {
    dispatch({
      type: SET_USER,
      payload: s,
    });
  };
  return (
    <FoodContext.Provider
      value={{
        foods: state.foods,
        createFood,
        setFood,
        currentFood: state.currentFood,
        listview: state.listview,
        setlistview,
        completeFood,
        cart: state.cart,
        additemtocart,
        deleteitemtocart,
        increaseitemtocart,
        decreaseitemtocart,
        deleteallitemtocart,

        search: state.search,
        setsearch,

        checkout: state.checkout,
        setcheckout,

        is_veg: state.is_veg,
        is_nonveg: state.is_nonveg,
        setnonveg,
        setveg,

        user: state.user,
        setuser,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
