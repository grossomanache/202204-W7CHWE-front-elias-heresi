import { useSelector } from "react-redux";
import styled from "styled-components";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const { contacts } = useSelector((state) => state.users);

  return (
    <HomeContainer>
      <Header />
      {contacts.length > 0 &&
        contacts.map((contact) => <Contact contact={contact} />)}
    </HomeContainer>
  );
};

export default Home;
