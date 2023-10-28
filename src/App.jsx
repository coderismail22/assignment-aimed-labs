import React from "react";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import Image from "./components/Image";

const Wrapper = styled.div`
  font-family: "poppins", "times new roman", "arial";
  display: flex;
  margin: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    max-width: 300px;
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 50%;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  max-width: 100%;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

function App() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </Wrapper>
  );
}

export default App;
