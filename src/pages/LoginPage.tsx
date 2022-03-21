import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../components/LoginComponent/Login";
import { RootState } from "../redux/reducers";
import { LoginUser, User } from "../types/userInterface";

const LoginPage = () => {
  const navigate = useNavigate();
  const userProfile: User | LoginUser = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (userProfile.loggedIn) {
      navigate(`/my-sessions/${userProfile.id}`);
    }
  }, [navigate, userProfile.id, userProfile.loggedIn]);
  return (
    <>
      <div>
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
