import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const CartTotal = ({ getTotalPrice, getCartItems }) => {
  console.log("Cart Items: ", getCartItems());
  return (
    <Container>
      <SubTotal>
        Sub total ( {getCartItems()}):{" "}
        <NumberFormat
          value={getTotalPrice()}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rs"}
        />
      </SubTotal>
      <CheckoutButton>Proceed To Checkout</CheckoutButton>
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  background-color: white;
  flex: 0.2;
  padding: 20px;
  align-items: flex-start;
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
