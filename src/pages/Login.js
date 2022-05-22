import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm.js/LoginForm";
import { getUsersThunk } from "../redux/thunks/thunks";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
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
