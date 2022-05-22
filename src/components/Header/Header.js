import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../../pages/Login";
import { logoutActionCreator } from "../../redux/features/usersSlice";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: thistle;
  font-size: 24px;
  border-bottom: 1px grey solid;
  margin-bottom: 15px;
  p {
    margin: 0;
    padding: 18px;
  }
  h1 {
    font-size: 24px;
    font-family: "Abril Fatface", cursive;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    dispatch(logoutActionCreator());
  };

  return (
    <HeaderContainer>
      {token ? (
        <>
          <p>Friends</p>
          <Link to="/">
            <h1>TRAPPERZ</h1>
          </Link>
          <p onClick={logout}>Logout</p>
        </>
      ) : (
        <>
          <Link to="/register">
            <p>Register</p>
          </Link>
          <Link to="/">
            <h1>TRAPPERZ</h1>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
