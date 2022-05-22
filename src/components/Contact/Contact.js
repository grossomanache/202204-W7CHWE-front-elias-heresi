import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  background-color: thistle;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
  }
`;

const Contact = ({ contact: { name, username, image } }) => {
  return (
    <ContactContainer>
      <h2>{name}</h2>
      <img src={image} alt="Jhayco" />
      <h3>Username: @{username}</h3>
    </ContactContainer>
  );
};

export default Contact;
