import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { styled } from "styled-components";

export const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="main__content">
          <Outlet />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  min-width: 100vw;
  padding-top: 2rem;

  .main__content {
    max-width: var(--max-width);
    margin: 0 auto;
  }
`;
