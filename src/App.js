import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import LoginForm from "./components/LoginForm.js/LoginForm";

const AppContainer = styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }
`;
function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </AppContainer>
  );
}

export default App;
