import Navigation from "../components/NavigationComponent/Navigation";
import meditation from "../images/meditation.png";
import styled from "styled-components";
import Footer from "../components/FooterComponent/Footer";

const Body = styled.body``;
const HomePage = () => {
  return (
    <>
      <Navigation />
      <Body className="body_container">
        <img
          src={meditation}
          alt="meditation woman"
          className="body_container_image"
          height={459}
          width={574}
        />
      </Body>
      <Footer />
    </>
  );
};

export default HomePage;
