import * as React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { styled } from "styled-components";
import { NavLinks } from ".";

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <div className="sidebar__container">
        <div className="sidebar__content">
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;

    .sidebar__container {
      min-height: calc(100vh - 96px - 150px);
      height: 100%;
      transition: var(--transition);
    }

    .sidebar__content {
      position: sticky;
      top: 0;
    }

    .nav__links {
      display: flex;
      flex-direction: column;
    }

    .nav__link {
      display: flex;
      align-items: center;
      color: var(--light-backdrop);
      padding-bottom: 2rem;
      padding-left: 1rem;
      text-transform: capitalize;
      transition: var(--transition);
      letter-spacing: var(--spacing);
      font-size: 12px;

      &:hover {
        color: var(--light-bulma);
      }

      &:hover .icon {
        color: var(--light-bulma);
      }
    }

    .icon {
      font-size: 1.2rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
  }
`;

export default Sidebar;
