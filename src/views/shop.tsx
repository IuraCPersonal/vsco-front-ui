import * as React from "react";
import { styled } from "styled-components";
import { Sort, Breadcrumb, Filters } from "../components";
import ProductList from "../components/product-list";

const Shop: React.FC = () => {
  return (
    <>
      <Breadcrumb title="Shop"></Breadcrumb>
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 1rem auto;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Shop;
