import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginUserThunk } from "../../redux/thunks/thunks";

const LoginFormContainer = styled.div`
  width: 500px;
  border: 1px grey solid;
  font-size: 35px;
  background-color: thistle;
  h2 {
    text-align: center;
    margin: 25px 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        font-size: 20px;
        height: 30px;
        margin: 0;
        margin: 15px;
        width: 240px;
      }
    }
    button {
      width: 200px;
      font-size: 30px;
      margin: 15px 0;
    }
  }
`;

const LoginForm = () => {
  const initialFields = { username: "", password: "" };
  const [loginInformation, setLoginInformation] = useState(initialFields);
  const dispatch = useDispatch();

  const changeData = (event) => {
    event.preventDefault();
    setLoginInformation({
      ...loginInformation,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(loginInformation));
    setLoginInformation(initialFields);
  };

  const resetForm = () => {
    setLoginInformation(initialFields);
  };
  return (
    <LoginFormContainer>
      <form autoComplete="off" noValidate id="login" onSubmit={submitForm}>
        <h2>Welcome trapper! Please login</h2>
        <div>
          <label>
            Username:{" "}
            <input
              id="username"
              type="text"
              value={loginInformation.username}
              onChange={changeData}
            />
          </label>
          <label>
            Password:{" "}
            <input
              id="password"
              type="password"
              value={loginInformation.password}
              onChange={changeData}
            />
          </label>
        </div>
        <button type="submit">Login</button>
        <button type="reset" onClick={resetForm}>
          Reset
        </button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
