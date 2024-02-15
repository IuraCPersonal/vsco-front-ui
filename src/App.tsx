import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Authentication,
  Shop,
  Home,
  Reviews,
  AuthAction,
  LogoutAction,
  Product,
  productDetailLoader,
  Profile,
  AddProduct,
  Cart,
} from "./views";

import { Layout as MainLayout } from "./layouts/main";
import { checkAuthLoader, tokenLoader } from "./utils/auth";
import { manipulateProductAction } from "./components";

export let routes = [
  {
    path: "/",
    id: "root",
    loader: tokenLoader,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "profile",
        loader: checkAuthLoader,
        Component: Profile,
        children: [
          {
            index: true,
            element: <h1>Profile Page</h1>,
          },
          {
            path: "new-product",
            Component: AddProduct,
            action: manipulateProductAction,
          },
        ],
      },
      {
        path: "cart",
        loader: checkAuthLoader,
        children: [
          {
            index: true,
            Component: Cart,
          },
        ],
      },
      {
        path: "logout",
        action: LogoutAction,
      },
      {
        path: "shop",
        loader: checkAuthLoader,
        children: [
          {
            index: true,
            element: <Shop />,
          },
          {
            path: ":productId",
            id: "product-detail",
            loader: productDetailLoader,
            children: [
              {
                index: true,
                element: <Product />,
              },
            ],
          },
        ],
      },
      {
        path: "/reviews",
        Component: Reviews,
      },
    ],
  },
  {
    path: "/auth",
    Component: Authentication,
    action: AuthAction,
  },
];

const router = createBrowserRouter(routes);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
