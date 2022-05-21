import RegisterForm from "./components/RegisterForm/RegisterForm";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const AppContainer = styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }
`;
function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    </AppContainer>
  );
}

export default App;
