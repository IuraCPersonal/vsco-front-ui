import * as React from "react";

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../constants";
import { IProduct } from "../components/product";
import reducer from "../reducers/cart";

const getLocaleStorage = () => {
  let cart = localStorage?.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage?.getItem("cart") as string);
  } else {
    return [];
  }
};

export interface CartContextType {
  cart: Array<any>;
  total_items: number;
  total_amount: number;
  shipping_fee: number;
  addToCart: (id: string, color: string, amount: number, product: any) => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: any) => void;
  clearCart: () => void;
}

const initialState: CartContextType = {
  cart: getLocaleStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
  addToCart: () => { },
  removeItem: () => { },
  toggleAmount: () => { },
  clearCart: () => { },
};

const CartContext = React.createContext<CartContextType>(null!);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: any,
  ) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const toggleAmount = (id: string, value: any) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: {
        id,
        value,
      },
    });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return React.useContext(CartContext);
};

export default CartProvider;
