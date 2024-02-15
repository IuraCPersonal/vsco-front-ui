import * as React from "react";
import { styled } from "styled-components";
import Product from "../product";
import { IProduct } from "../product";

interface Props {
  products: Array<IProduct>;
}

const GridView: React.FC<Props> = ({ products }) => {
  return (
    <Wrapper>
      <div className="products__container">
        {products.map((product) => {
          return <Product key={product._id.toString()} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products__container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products__container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
