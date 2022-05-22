import styled from "styled-components";
import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Register = () => {
  return (
    <RegisterContainer>
      <Header />
      <RegisterForm />
    </RegisterContainer>
  );
};

export default Register;
