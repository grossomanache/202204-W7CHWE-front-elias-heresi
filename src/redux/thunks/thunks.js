import axios from "axios";

export const registerUserThunk = (registerInformation) => async (dispatch) => {
  const route = `${process.env.REACT_APP_API_URL}/users/register`;
  await axios.post(route, registerInformation);
};
