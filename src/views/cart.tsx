import * as React from "react";
import { styled } from "styled-components";
import { Breadcrumb } from "../components";
import { CartContent } from "../components/cart";

const Cart: React.FC = () => {
  return (
    <>
      <Breadcrumb title="Cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section``;

export default Cart;
