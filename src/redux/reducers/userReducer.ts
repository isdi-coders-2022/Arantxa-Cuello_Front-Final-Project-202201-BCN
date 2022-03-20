import {
  AnyActionInterface,
  loginUserInterface,
} from "../../types/actionsInterface";
import { User } from "../../types/userInterface";
import actionsTypes from "../actions/actionsTypes";

const initialDataUser = {
  name: "",
  username: "",
  id: "",
  loggedIn: false,
};

const userReducer = (
  userData: User = initialDataUser,
  action: loginUserInterface | AnyActionInterface = {
    type: "",
  }
) => {
  let newUser;
  switch (action.type) {
    case actionsTypes.loginUser:
      newUser = { ...(action as loginUserInterface).user };
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
