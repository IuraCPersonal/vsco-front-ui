import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FaBars } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";

import { links } from "../constants/index";
import coffeBeans from "../assets/coffe-beans.svg";
import { useAuth } from "../contexts/auth";

const Navbar: React.FC = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  return (
    <NavContainer>
      <div className="nav__content">
        <div className="nav__header">
          <NavLink to="/">
            <img src={coffeBeans} alt="Coffee Logo" />
            VS Coffee
          </NavLink>
          <button type="button" className="nav__toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav__navigation">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  style={({ isActive }: { isActive: boolean }): object => {
                    return {
                      borderBottom: isActive
                        ? "2px solid var(--clr-primary-7)"
                        : "",
                    };
                  }}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="nav__actions">
          {auth.user && (
            <button
              type="button"
              className="auth-action"
              onClick={() => {
                auth.signout(() => navigate("/"));
              }}
            >
              <BiLogOut /> Logout
            </button>
          )}
          {!auth.user && (
            <button
              type="button"
              className="auth-action"
              onClick={() => navigate("/auth?mode=login")}
            >
              <BiLogIn />
              Login
            </button>
          )}
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  .nav__content {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .auth-action {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);

    svg {
      margin-right: 5px;
      font-size: 1.5rem;
    }
  }

  .nav__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 60px;
      margin-left: -15px;
    }
  }

  .nav__toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;

    svg {
      font-size: 2rem;
    }
  }

  .nav__navigation {
    display: none;
  }

  .nav__header {
    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 2rem;
      color: var(--clr-primary-3);
      font-family: monospace;
      letter-spacing: var(--spacing);
      font-weight: 600;
      position: relative;
    }
  }

  @media (min-width: 992px) {
    .nav__toggle {
      display: none;
    }

    .nav__content {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav__navigation {
      display: flex;
      gap: 1rem;
      justify-content: center;

      li {
        margin: 0 0.5rem;
      }

      a {
        color: var(--clr-grey-1);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;

        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
`;

export default Navbar;
