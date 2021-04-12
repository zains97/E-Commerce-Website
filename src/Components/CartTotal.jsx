import React from "react";
import styled from "styled-components";

const CartTotal = () => {
  return (
    <Container>
      <SubTotal>Sub total (2 items): Rs. 50000</SubTotal>
      <CheckoutButton>Proceed To Checkout</CheckoutButton>
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  background-color: white;
  flex: 0.25;
  padding: 20px;
`;

const SubTotal = styled.h2`
  margin-bottom: 5%;
`;

const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #ddb347;
  }
`;
