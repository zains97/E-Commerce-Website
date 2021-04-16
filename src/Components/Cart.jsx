import React, { useEffect } from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const Cart = ({ cartItems }) => {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.data.price * item.data.quantity;
    });
    return total;
  };

  const getCartItems = () => {
    let itemsCount = 0;
    cartItems.forEach((item) => {
      itemsCount += item.data.quantity;
    });
    return itemsCount;
  };

  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal getCartItems={getCartItems} getTotalPrice={getTotalPrice} />
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0px 18px;
  align-items: flex-start;
`;
