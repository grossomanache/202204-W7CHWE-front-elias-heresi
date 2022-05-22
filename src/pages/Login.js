import styled from "styled-components";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm.js/LoginForm";

const LoginContainer = styled.div`
  align-items: center;
`;

const Login = () => {
  return (
    <LoginContainer>
      <Header />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
