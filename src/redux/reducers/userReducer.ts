import {
  AnyActionInterface,
  loadProfileInterface,
  loginUserInterface,
} from "../../types/actionsInterface";
import { LoginUser, User } from "../../types/userInterface";
import actionsTypes from "../actions/actionsTypes";

const initialDataUser = {
  name: "",
  username: "",
  id: "",
  loggedIn: false,
};

const userReducer = (
  userData: User | LoginUser = initialDataUser,
  action: loginUserInterface | AnyActionInterface | loadProfileInterface = {
    type: "",
  }
) => {
  let newUser;
  switch (action.type) {
    case actionsTypes.loginUser:
      newUser = { ...(action as loginUserInterface).user, loggedIn: true };
      break;
    case actionsTypes.logoutUser:
      newUser = { ...initialDataUser };
      break;

    default:
      newUser = { ...userData };
  }
  return newUser;
};
export default userReducer;
