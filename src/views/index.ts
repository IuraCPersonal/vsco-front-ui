import Authentication, { action as AuthAction } from "./auth";
import Shop from "./shop";
import Home from "./home";
import Reviews from "./reviews";
import Product from "./product";
import Profile from "./profile";
import AddProduct from "./add-product";
import Cart from "./cart";
import { action as LogoutAction } from "./logout";
import { loader as productDetailLoader } from "./product";

export {
  Authentication,
  AuthAction,
  Shop,
  Home,
  Reviews,
  LogoutAction,
  Product,
  productDetailLoader,
  Profile,
  AddProduct,
  Cart,
};
