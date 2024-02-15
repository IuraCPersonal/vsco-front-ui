import { GoHome, GoPlusCircle } from "react-icons/go";

export const sidebar_links = [
  { id: 1, text: "Dashboard", path: "/profile", icon: <GoHome /> },
  { id: 2, text: "Add Product", path: "new-product", icon: <GoPlusCircle /> },
  // { id: 3, text: "add job", path: "add-job", icon: <FaWpforms /> },
  // { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
];

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "shop",
    url: "/shop",
  },
  {
    id: 3,
    text: "reviews",
    url: "/reviews",
  },
  {
    id: 4,
    text: "about",
    url: "/about",
  },
];

export const SIDEBAR_OPEN = "SIDEBAR_OPEN";
export const SIDEBAR_CLOSE = "SIDEBAR_CLOSE";
export const GET_PRODUCTS_BEGIN = "GET_PRODUCTS_BEGIN";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const GET_SINGLE_PRODUCT_BEGIN = "GET_SINGLE_PRODUCT_BEGIN";
export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS";
export const GET_SINGLE_PRODUCT_ERROR = "GET_SINGLE_PRODUCT_ERROR";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const SET_GRIDVIEW = "SET_GRIDVIEW";
export const SET_LISTVIEW = "SET_LISTVIEW";
export const UPDATE_SORT = "UPDATE_SORT";
export const SORT_PRODUCTS = "SORT_PRODUCTS";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const TOGGLE_CART_ITEM_AMOUNT = "TOGGLE_CART_ITEM_AMOUNT";
export const CLEAR_CART = "CLEAR_CART";
export const COUNT_CART_TOTALS = "COUNT_CART_TOTALS";

export const URL = "http://localhost:3000/products";

export type Action<TPayload> = {
  type: string;
  payload?: TPayload;
};

export interface IActionCreator<P> {
  type: string;
  (payload: P): Action<P>;
}

export function actionCreator<P>(type: string): IActionCreator<P> {
  return Object.assign((payload: P) => ({ type, payload }), { type });
}
