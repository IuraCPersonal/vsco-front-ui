import * as React from "react";
import { styled } from "styled-components";
import { IProduct } from "../product";
import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers";

interface Props {
  products: Array<IProduct>;
}

const ListView: React.FC<Props> = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { _id, image, name, price, description } = product;
        return (
          <article key={_id.toString()}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 147)}...</p>
              <Link to={`/shop/${_id.toString()}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    color: var(--light-hit);
    margin-bottom: 0.75rem;
  }

  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }

  .btn {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    background: var(--light-piccolo);
    color: var(--light-gohan);

    &:hover {
      background: var(--light-piccolo-hover);
      color: var(--light-gohan);
    }
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
