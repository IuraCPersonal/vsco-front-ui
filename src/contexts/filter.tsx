import * as React from "react";
import reducer from "../reducers/filter";
import { useProductsContext } from "./products";
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../constants";

export interface FilterContextType {
  filtered_products: any[];
  all_products: any[];
  grid_view: boolean;
  sort: string;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
  setGridView: () => void;
  setListView: () => void;
  updateSort: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  updateFilters: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => void;
  clearFilters: () => void;
}

const initialState: FilterContextType = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
  setGridView: () => { },
  setListView: () => { },
  updateSort: () => { },
  updateFilters: () => { },
  clearFilters: () => { },
};

const FilterContext = React.createContext<FilterContextType>(null!);

function FilterProvider({ children }: { children: React.ReactNode }) {
  const { products } = useProductsContext();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  React.useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    // just for demonstration;
    // const name = e.target.name
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement>,
  ): void => {
    const target = e.target as typeof e.target & {
      name: string;
      value: string | number;
      textContent: string;
      checked: boolean;
      dataset: {
        color: string;
      };
    };

    let name = target?.name;
    let value = target?.value as string | number | boolean;

    if (name === "category") {
      value = target.textContent;
    }

    if (name === "color") {
      value = target.dataset.color;
    }

    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping") {
      value = target.checked;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return React.useContext(FilterContext);
}

export default FilterProvider;
