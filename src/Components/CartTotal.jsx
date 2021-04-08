import React from "react";
import styled from "styled-components";

const CartTotal = () => {
  return (
    <Container>
      <h2>Sub total (2 items)</h2>
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  height: 200px;
  background-color: white;
  flex: 0.2;
  padding: 20px;
`;
