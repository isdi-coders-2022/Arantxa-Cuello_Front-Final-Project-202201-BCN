import meditation from "../images/meditation.png";
import styled from "styled-components";
import { primary } from "../styles/globalStyles";
import { LoginUser, User } from "../types/userInterface";
import { RootState } from "../redux/reducers";
import { useSelector } from "react-redux";

const Body = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  .body-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  h1 {
    font-weight: normal;
    font-size: 16px;
    color: ${primary};
    text-align: center;
  }
  .picture {
    display: block;
    padding-top: 40px;
  }
  .headlines {
    margin-left: 38px;
    margin-top: 18px;
    max-width: 600px;
    width: 100%;
  }
  @media screen (max-width: 600px) {
    h1 {
      font-weight: normal;
      font-size: 25px;
      color: #219ebc;
      text-align: center;
      padding: 20px;
    }
    .body-container {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      -webkit-box-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .picture {
      display: none;
    }
  }
`;
const HomePage = () => {
  const user: User | LoginUser = useSelector((state: RootState) => state.user);
  return (
    <>
      <Body>
        {user.loggedIn ? (
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

            <h1>
              Welcome to Mindfulness, {user.username} your meditation space.
            </h1>
          </div>
        ) : (
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
        )}
      </Body>
    </>
  );
};

export default HomePage;
