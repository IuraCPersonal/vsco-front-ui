import { Link, NavLink, Form, useRouteLoaderData } from "react-router-dom";
import { styled } from "styled-components";
import { TbMenu } from "react-icons/tb";
import Logo from "../assets/logo.svg";
// import { FaSearch } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { links } from "../constants/index";

const Navbar: React.FC = () => {
  let token = useRouteLoaderData("root") as string;

  return (
    <NavContainer>
      <div className="nav__content">
        <div className="nav__header">
          <Link to="/" className="nav__logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <button type="button" className="nav__toggle">
            <TbMenu />
          </button>
        </div>
        <div className="nav__navigation">
          <ul>
            {links.map((link) => {
              const { id, text, url } = link;

              return (
                <li key={id}>
                  <NavLink
                    to={url}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive
                          ? "2px solid var(--light-hit)"
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
        </div>
        {token && (
          <div className="cart__btn__wrapper">
            <Link to="/cart" className="cart__btn">
              <AiOutlineShopping />
            </Link>
            <Link to="/profile" className="cart__btn">
              <AiOutlineUser />
            </Link>
          </div>
        )}
        <div className="nav__actions">
          {token && (
            <Form action="/logout" method="post">
              <button>Logout</button>
            </Form>
          )}
          {!token && <Link to="/auth?mode=login">Login</Link>}
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-gohan);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  .cart__btn__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 0 1rem;
  }

  .nav__content {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 75px;
      margin-top: 8px;
    }
  }

  button.nav__toggle {
    display: grid;
    place-items: center;
    background: transparent;
    border: transparent;
    color: var(--light-trunks);
    cursor: pointer;
    padding: 8.5px;
    border-radius: var(--radius);
    transition: all 250ms ease-in-out;

    &:hover {
      background: var(--light-hover);
    }

    svg {
      font-size: 1.5rem;
    }
  }

  .nav__navigation {
    display: none;
  }

  .nav__actions {
    display: none;
  }

  .nav__search {
    display: none;
  }

  .cart__btn__wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    height: 6rem;

    .nav__toggle {
      display: none !important;
    }

    .cart__btn__wrapper {
      display: flex;

      a {
        display: flex;
        justify-content: center;
        align-items: center;

        transition: var(--transition);
        color: var(--light-backdrop);

        &:hover {
          color: var(--light-bulma);
        }
      }

      svg {
        font-size: 1.7rem;
      }
    }

    .nav__content {
      display: grid;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .nav__search {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: 2rem;
      border: 1px solid var(--light-beerus);
      padding: 0.4rem 0.8rem;
      border-radius: 9999px;
      color: var(--clr-grey-8);

      input {
        color: var(--clr-grey-5);
        outline: none;
        border: none;
      }

      &:hover {
        box-shadow:
          0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);
      }

      transition: all 250ms ease-in-out;
    }

    .nav__header {
      .nav__logo span {
        font-size: 2.5rem;
      }
    }

    .nav__navigation {
      display: block;

      ul {
        display: flex;
        justify-content: center;

        li {
          margin: 0 0.5rem;
        }

        a {
          color: var(--light-bulma);
          font-size: 1rem;
          text-transform: capitalize;
          letter-spacing: var(--spacing);
          padding: 0.5rem;

          &:hover {
            border-bottom: 2px solid var(--light-hit);
          }
        }
      }
    }

    .nav__actions {
      display: flex;

      button {
        background: transparent;
      }

      a,
      button {
        text-align: center;
        min-width: 105px;
        font-size: 1em;
        color: var(--light-gohan);
        background-color: var(--light-bulma);
        border: 2px solid var(--light-bulma);
        padding: 0.5rem 1.5rem;
        transition: all 250ms;

        &:hover {
          background-color: var(--light-gohan);
          color: var(--light-bulma);
          brightness: 105%;
          box-shadow:
            rgba(0, 0, 0, 0.4) 5px 5px,
            rgba(0, 0, 0, 0.3) 10px 10px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Navbar;
