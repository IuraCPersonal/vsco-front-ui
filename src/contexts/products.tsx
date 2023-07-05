import axios from "axios";
import * as React from "react";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  URL as PRODUCTS_API,
} from "../constants";

import reducer from "../reducers/products";

export interface ProductsContextType {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: [];
  featured_products: [];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: Object;
}

const initialState: ProductsContextType = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext<ProductsContextType>(null!);

function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchProducts = async (URL: string) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      const response = await axios.get(URL);
      const products = response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  React.useEffect(() => {
    fetchProducts(PRODUCTS_API);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return React.useContext(ProductsContext);
}

export default ProductsProvider;
