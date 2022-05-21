import RegisterForm from "./components/RegisterForm/RegisterForm";
import styled from "styled-components";

const AppContainer = styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }
`;

function App() {
  return (
    <AppContainer>
      <RegisterForm />
    </AppContainer>
  );
}

export default App;
