import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppContainer = styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }
`;
function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Provider>
    </AppContainer>
  );
}

export default App;
