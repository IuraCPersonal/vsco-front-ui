import * as React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { styled } from "styled-components";

interface IProps {
  stars: number;
  reviews: number;
}

const Stars: React.FC<IProps> = ({ stars, reviews }) => {
  const productStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{productStars}</div>
      <p className="reviews">{reviews} reviews</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #d33030;
    font-size: 1rem;
    margin-right: 0.25rem;
  }

  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }

  .reviews {
    color: var(--light-trunks);
  }

  margin-bottom: 0.5rem;
`;

export default Stars;
