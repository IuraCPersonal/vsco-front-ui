import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
