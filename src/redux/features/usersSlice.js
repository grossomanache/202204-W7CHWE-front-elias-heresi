import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    login: (users, action) => ({ ...action.payload }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;
export default userSlice.reducer;
