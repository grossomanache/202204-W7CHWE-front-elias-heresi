import { useState } from "react";
import styled from "styled-components";

const RegisterFormContainer = styled.div`
  width: 500px;
  border: 1px grey solid;
  font-size: 40px;
  background-color: pink;

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
        height: 30px;
        margin: 0;
        margin: 15px;
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

  return (
    <RegisterFormContainer>
      <form autoComplete="off" noValidate>
        <div>
          <label>
            Name: <input id="name" type="text" value={formInformation.name} />
          </label>
          <label>
            Username:{" "}
            <input id="username" type="text" value={formInformation.username} />
          </label>
          <label>
            Password:{" "}
            <input id="password" type="text" value={formInformation.password} />
          </label>
        </div>
        <button type="submit">Register</button>
        <button type="reset">Reset</button>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
