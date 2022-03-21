import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import medalla from "../images/medalla.png";
import { RootState } from "../redux/reducers";
import { loadProfileThunk } from "../redux/thunks/userThunk";
import { primary, secondary } from "../styles/globalStyles";
import { LoginUser, User } from "../types/userInterface";

const MySessionPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const userProfile: User | LoginUser = useSelector(
    (state: RootState) => state.user
  );
  console.log(userProfile);

  useEffect(() => {
    dispatch(loadProfileThunk(userProfile.id as string));
  }, [dispatch, userProfile.id]);

  return (
    <Profile>
      {userProfile.loggedIn ? (
        <h1>Hello, {userProfile.username}</h1>
      ) : (
        <h1>Please log in</h1>
      )}
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
