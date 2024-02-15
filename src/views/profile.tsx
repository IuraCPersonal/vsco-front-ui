import * as React from "react";
import { styled } from "styled-components";
import { Breadcrumb } from "../components";
import { Sidebar } from "../components/profile";
import { Outlet } from "react-router-dom";

const Profile: React.FC = () => {
  return (
    <>
      <Breadcrumb title="Profile"></Breadcrumb>
      <Wrapper className="page">
        <div className="section-center profile">
          <Sidebar />
          <div>
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .profile {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 1rem auto;
  }

  @media (min-width: 768px) {
    .profile {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Profile;
