import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import "../App.css";

const Header = ({ cartItems }) => {
  const getCartItems = () => {
    let itemsCount = 0;
    cartItems.forEach((item) => {
      itemsCount += item.data.quantity;
    });
    return itemsCount;
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png" />
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>
      <HeaderSearch>
        <HeaderSeachInput type="text"></HeaderSeachInput>
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>
      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Zain</OptionLineOne>
          <OptionLineTwo>Accounts & Lists</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon />
            <CartCount>{getCartItems()}</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 20px;
    margin-top: 10px;
  }
`;

const HeaderOption = styled.div`
  padding: 10px 0px 10px 20px;
`;

const HeaderOptionAddress = styled.div`
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
`;

const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  margin-right: 4px;
  backgroudn-color: white;
  :focus-within {
    box-shadow: 0 0 0 2px #f90;
  }
`;

const HeaderSeachInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    color: white;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  margin-left: 10px;
  font-weight: 700;
  font-size: 25px;
  color: #f08804;
`;

export default Header;