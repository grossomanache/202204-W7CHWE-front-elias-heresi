import styled from "styled-components";

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
  const token = localStorage.getItem("token");

  return (
    <HeaderContainer>
      {token ? (
        <>
          <p>Friends</p>
          <h1>TRAPPERZ</h1>
          <p>Logout</p>
        </>
      ) : (
        <>
          <p>Register</p>
          <h1>TRAPPERZ</h1>
          <p>Login</p>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
