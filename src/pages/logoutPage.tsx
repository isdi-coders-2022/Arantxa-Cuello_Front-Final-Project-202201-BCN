import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { logoutUserAction } from "../redux/actions/actionsCreators";
import { primary } from "../styles/globalStyles";

const LogoutPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("UserToken");
    dispatch(logoutUserAction());

    navigate(`/`);
  };
  return (
    <>
      <Form>
        <div className="logout-container">
          <h3>Do you want to log out?</h3>
          <button type="submit" onClick={logOut}>
            Log out.
          </button>
        </div>
      </Form>
    </>
  );
};

const Form = styled.main`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .logout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    padding: 20px;
    color: ${primary};
  }
  button {
    border-radius: 20px;
    border: 1px solid #57a9ec;
    background-color: ${primary};
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export default LogoutPage;
