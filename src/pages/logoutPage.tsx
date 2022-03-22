import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logoutUserAction } from "../redux/actions/actionsCreators";
import { RootState } from "../redux/reducers";
import { primary } from "../styles/globalStyles";
import { LoginUser, User } from "../types/userInterface";
import LoginPage from "./LoginPage";

const LogoutPage = () => {
  const user: User | LoginUser = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("UserToken", "");
    dispatch(logoutUserAction());
    navigate(`/`);
  };
  return (
    <>
      {user.loggedIn ? (
        <Form>
          <div>
            <h1>Do you want to log out?</h1>

            <button type="submit" {...logOut}>
              Yes, log out.
            </button>
          </div>
        </Form>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

const Form = styled.main`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    padding: 10px;
    color: ${primary};
    font-size: 20px;
    font-weight: normal;
  }
`;

export default LogoutPage;
