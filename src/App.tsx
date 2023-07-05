import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout as MainLayout } from "./layouts/main";

import { Authentication, Protected, Home, Reviews, AuthAction } from "./views";
import AuthProvider from "./contexts/auth";
import { checkAuthLoader } from "./utils/auth";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/auth",
        Component: Authentication,
        action: AuthAction,
      },
      {
        path: "/protected",
        element: <Protected />,
        loader: checkAuthLoader,
      },
      {
        path: "/reviews",
        Component: Reviews,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
