import styled from "styled-components";
import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterContainer = styled.div``;

const Register = () => {
  return (
    <RegisterContainer>
      <Header />
      <RegisterForm />
    </RegisterContainer>
  );
};

export default Register;
