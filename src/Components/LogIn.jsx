import React from "react";
import styled from "styled-components";

const LogIn = () => {
  return (
    <Container>
      <Content>
        <WebsiteLogo></WebsiteLogo>
        <LogInButton></LogInButton>
      </Content>
    </Container>
  );
};

export default LogIn;

const Container = styled.div``;

const Content = styled.div``;
const WebsiteLogo = styled.div``;
const LogInButton = styled.div``;
