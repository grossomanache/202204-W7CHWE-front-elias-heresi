import styled from "styled-components";
import Header from "../components/Header/Header";

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  );
};

export default Home;
