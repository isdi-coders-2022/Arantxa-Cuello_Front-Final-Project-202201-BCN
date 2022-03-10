import Navigation from "../components/NavigationComponent/Navigation";
import meditation from "../images/meditation.png";
import styled from "styled-components";

const Body = styled.body`
  img {
    width: 574 px;
    height: 459 px;
  }
`;
const HomePage = () => {
  return (
    <>
      <Navigation />
      <Body className="body_container">
        <img
          src={meditation}
          alt="meditation woman"
          className="body_container_image"
        />
      </Body>
    </>
  );
};

export default HomePage;
