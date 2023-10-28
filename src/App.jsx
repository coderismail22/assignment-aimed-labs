import "./App.css";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";
// const Button = styled.button`
//   color: blue;
// `
const Wrapper = styled.div`
  font-family: "poppins","times new roman","arial";
`;

function App() {
  return (
    <Wrapper>
      {/* <Button>Button</Button> */}
      <LoginForm></LoginForm>
    </Wrapper>
  );
}

export default App;
