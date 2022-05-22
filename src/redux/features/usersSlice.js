import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

let userInfo;

if (localStorage.getItem("token")) {
  const token = `Bearer ${localStorage.getItem("token")}`;
  userInfo = jwtDecode(token);
} else {
  userInfo = { id: "", iat: "" };
}

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: userInfo,
    contacts: [],
  },
  reducers: {
    login: (users, action) => ({ ...users, currentUser: action.payload }),
    logout: (users, action) => ({
      ...users,
      currentUser: { id: "", iat: "" },
    }),
    loadUsers: (users, action) => ({
      ...users,
      contacts: action.payload,
    }),
    resetUsers: (users, action) => ({
      ...users,
      contacts: [],
    }),
  },
});

export const {
  login: loginActionCreator,
  logout: logoutActionCreator,
  loadUsers: loadUsersActionCreator,
  resetUsers: resetUsersActionCreator,
} = userSlice.actions;
export default userSlice.reducer;
