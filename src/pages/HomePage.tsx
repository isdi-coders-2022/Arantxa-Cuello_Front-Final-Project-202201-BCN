import Navigation from "../components/NavigationComponent/Navigation";
import meditation from "../images/meditation.png";
import styled from "styled-components";
import { primary } from "../styles/globalStyles";

const Body = styled.article`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 120px;
  .body-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  h1 {
    font-weight: normal;
    font-size: 2em;
    color: ${primary};
    text-align: center;
  }
  .picture {
    display: block;
  }
  .headlines {
    margin-left: 38px;
    margin-top: 18px;
    max-width: 600px;
    width: 100%;
  }
  @media screen (max-width: 600px) {
    h1 {
      display: inline-block;
      text-align: center;
    }
  }
`;
const HomePage = () => {
  return (
    <>
      <Navigation />
      <Body>
        <div className="body-container">
          <div className="picture">
            <img
              src={meditation}
              alt="meditation woman"
              className="body_container_image"
              height={459}
              width={574}
            />
          </div>

          <h1>Welcome to Mindfulness, your meditation space.</h1>
        </div>
      </Body>
    </>
  );
};

export default HomePage;
