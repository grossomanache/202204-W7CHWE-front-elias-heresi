import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loadUsersActionCreator,
  loginActionCreator,
} from "../features/usersSlice";

const token = `Bearer ${localStorage.getItem("token")}`;

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

export const getUsersThunk = () => async (dispatch) => {
  const route = `${process.env.REACT_APP_API_URL}/users/list`;
  const { data } = await axios.get(route, {
    headers: { Authorization: token },
  });
  dispatch(loadUsersActionCreator(data));
};
