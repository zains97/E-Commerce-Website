import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";

const LogIn = (props) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        console.log("New User: ", newUser);
        props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <WebsiteLogo
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          }
        ></WebsiteLogo>
        <h1>Sign In</h1>
        <LogInButton>
          <Button
            mt="40px"
            size="large"
            variant="contained"
            color="primary"
            onClick={signIn}
          >
            Sign In With Google
          </Button>
        </LogInButton>
      </Content>
    </Container>
  );
};

export default LogIn;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8fa;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px #b8babf;
  text-align: center;
`;

const WebsiteLogo = styled.img`
  height: 100px;
  margin-bottom: 40px;
`;
const LogInButton = styled.div`
  margin-top: 50px;
`;
