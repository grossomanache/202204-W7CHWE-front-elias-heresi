import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/usersSlice";

export const registerUserThunk = (registerInformation) => async (dispatch) => {
  const route = `${process.env.REACT_APP_API_URL}/users/register`;
  await axios.post(route, registerInformation);
};

export const loginUserThunk = (loginInformation) => async (dispatch) => {
  const route = `${process.env.REACT_APP_API_URL}/users/login`;
  const {
    data: { token },
  } = await axios.post(route, loginInformation);
  localStorage.setItem("token", token);
  const userInfo = jwtDecode(token);
  dispatch(loginActionCreator(userInfo));
};
