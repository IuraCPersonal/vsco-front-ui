import * as React from "react";
import { sidebar_links } from "../../constants";
import { NavLink } from "react-router-dom";

const NavLinks: React.FC = () => {
  return (
    <div className="nav__links">
      {sidebar_links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? "nav__link active" : "nav__link";
            }}
            key={id}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
