import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Product = ({ title, price, rating, image, id }) => {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      doc.exists
        ? cartItem.update({
            quantity: doc.data().quantity + 1,
          })
        : db.collection("cartItems").doc(id).set({
            name: title,
            price: price,
            image: image,
            quantity: 1,
          });
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => "⭐")}
      </Rating>
      <Image src={image} />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add To Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  max-height: 450px;
  max-width: 350px;
  flex: 1;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 3%;
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;

const Rating = styled.div``;

const Image = styled.img`
  max-height: 250px;
  object-fit: contain;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor: pointer;
`;

const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-items: center;
`;
