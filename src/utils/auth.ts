import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  const token = localStorage?.getItem("token");

  if (!token) {
    return null;
  }

  return token;
};

export const tokenLoader = () => {
  const token = getAuthToken();
  return token;
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
};

/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },

  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };
