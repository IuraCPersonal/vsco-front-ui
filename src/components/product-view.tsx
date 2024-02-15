import * as React from "react";
import { IProduct } from "./product";
import { styled } from "styled-components";
import { AddToCart, Breadcrumb } from ".";
import { formatPrice } from "../helpers";
import { Stars } from "./atoms";

const ProductView: React.FC<IProduct> = (product) => {
  const { name, price, description, image, company } = product;

  return (
    <Wrapper>
      <Breadcrumb product="Shop" title={product.name} />

      <div className="page section-center">
        <div className="product__center">
          <section>
            <img src={image} alt="Product" />
          </section>
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={4.3} reviews={24} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="description">{description}</p>
            <p className="info">
              <span>Available : </span>
              In Stock
            </p>
            <p className="info">
              <span>SKU : </span>
              recQ0fMd8T0Vk211E
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product__center {
    display: grid;
    gap: 4rem;
    margin-top: 1rem;
  }

  .price {
    color: var(--light-hit);
    font-weight: 500;
  }

  .description {
    line-height: 2;
    max-width: 45em;
    color: var(--light-trunks);
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    color: var(--light-bulma);

    span {
      font-weight: 700;
    }
  }

  img {
    height: 600px;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    .product__center {
      grid-template-columns: 1fr 1fr;
      /* align-items: center; */
    }

    .price {
      font-size: 1.25rem;
    }
  }
`;

export default ProductView;
