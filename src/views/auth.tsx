import { json, redirect } from "react-router-dom";
import { AuthForm } from "../components";

const Authentication: React.FC = () => {
  return <AuthForm />;
};

export default Authentication;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported Mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    username: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:3000/auth/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  const resData = await response.json();
  const token = resData.access_token;

  localStorage.setItem("token", token);

  return redirect("/");
};
