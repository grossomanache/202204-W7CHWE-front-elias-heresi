import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    login: (users, action) => ({ ...action.payload }),
    logout: (users, action) => ({}),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;
export default userSlice.reducer;
