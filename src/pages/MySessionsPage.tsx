import styled from "styled-components";
import medalla from "../images/medalla.png";
import { primary, secondary } from "../styles/globalStyles";
const MySessionPage = () => {
  return (
    <Profile>
      <h1>Hello, name of user</h1>
      <div>
        <img src={medalla} alt="trophy" />
      </div>
      <h2>History</h2>
    </Profile>
  );
};

const Profile = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 170px;
  img {
    width: 150px;
    padding: 20px;
  }
  h1 {
    padding: 10px;
    color: ${primary};
  }
  h2 {
    color: ${secondary};
  }
`;

export default MySessionPage;
