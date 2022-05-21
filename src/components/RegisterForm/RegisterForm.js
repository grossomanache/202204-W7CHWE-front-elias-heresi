import { useState } from "react";
import styled from "styled-components";

const RegisterFormContainer = styled.div`
  width: 500px;
  border: 1px grey solid;
  font-size: 35px;
  background-color: pink;
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

const RegisterForm = () => {
  const initialFields = { name: "", username: "", password: "" };
  const [formInformation, setForminformation] = useState(initialFields);

  const changeData = (event) => {
    setForminformation({
      ...formInformation,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setForminformation(initialFields);
  };
  return (
    <RegisterFormContainer>
      <form autoComplete="off" noValidate id="register">
        <h2>Welcome trap star! Please register</h2>
        <div>
          <label>
            Name:{" "}
            <input
              id="name"
              type="text"
              value={formInformation.name}
              onChange={changeData}
            />
          </label>
          <label>
            Username:{" "}
            <input
              id="username"
              type="text"
              value={formInformation.username}
              onChange={changeData}
            />
          </label>
          <label>
            Password:{" "}
            <input
              id="password"
              type="text"
              value={formInformation.password}
              onChange={changeData}
            />
          </label>
        </div>
        <button type="submit">Enroll</button>
        <button type="reset" onClick={resetForm}>
          Reset
        </button>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
